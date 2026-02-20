const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI missing in .env");
    process.exit(1);
}

if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET missing in .env");
    process.exit(1);
}

const client = new MongoClient(process.env.MONGODB_URI);

let db, users, tasks;

async function connectDB() {
    try {
        await client.connect();
        db = client.db();
        users = db.collection('users');
        tasks = db.collection('tasks');

        await users.createIndex({ email: 1 }, { unique: true });

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

app.post('/api/register', async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body;

        if (!fullName || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const normalizedEmail = email.toLowerCase().trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(normalizedEmail)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await users.insertOne({
            fullName: fullName.trim(),
            email: normalizedEmail,
            password: hashedPassword,
            createdAt: new Date()
        });

        const token = jwt.sign(
            { userId: result.insertedId.toString(), email: normalizedEmail },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({
            message: 'User created successfully',
            token,
            user: {
                id: result.insertedId,
                fullName,
                email: normalizedEmail
            }
        });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'User already exists' });
        }

        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const normalizedEmail = email.toLowerCase().trim();

        const user = await users.findOne({ email: normalizedEmail });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user._id.toString(), email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api/tasks', authenticateToken, async (req, res) => {
    try {
        const userTasks = await tasks
            .find({ userId: req.user.userId })
            .sort({ createdAt: -1 })
            .toArray();

        res.json(userTasks);
    } catch (error) {
        console.error('Get tasks error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.post('/api/tasks', authenticateToken, async (req, res) => {
    try {
        const { title, time } = req.body;

        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        const task = {
            userId: req.user.userId,
            title: title.trim(),
            time: time || null,
            completed: false,
            createdAt: new Date()
        };

        const result = await tasks.insertOne(task);
        res.status(201).json({ ...task, _id: result.insertedId });

    } catch (error) {
        console.error('Create task error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.put('/api/tasks/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid task ID' });
        }

        const result = await tasks.updateOne(
            { _id: new ObjectId(id), userId: req.user.userId },
            { $set: req.body }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json({ message: 'Task updated successfully' });

    } catch (error) {
        console.error('Update task error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.delete('/api/tasks/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid task ID' });
        }

        const result = await tasks.deleteOne({
            _id: new ObjectId(id),
            userId: req.user.userId
        });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json({ message: 'Task deleted successfully' });

    } catch (error) {
        console.error('Delete task error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
