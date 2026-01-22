const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { MongoClient, ObjectId } = require("mongodb");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "BLOG_SECRET_KEY_123"; 
const MONGO_URL = "mongodb://localhost:27017";
const PORT = 5000;

const client = new MongoClient(MONGO_URL);
let db;

async function connectDB() {
  await client.connect();
  db = client.db("blogwebsitedb");
  console.log("MongoDB connected");
}
connectDB();

function verifyToken(req, res, next) {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aezazkhatri09@gmail.com",
    pass: "gcdgivdzdprwevsu",
  },
});


app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await db.collection("users").findOne({ email });
  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  try {
    await transporter.sendMail({
      from: `"Blog Website" <aezazkhatri09@gmail.com>`,
      to: email,
      subject: "Registration Successful",
      html: `
        <h2>Welcome, ${name}!</h2>
        <p>You have successfully registered on our blog website.</p>
        <p>You can now login and start posting blogs.</p>
        <br/>
        <p>Thanks,<br/>Blog Website Team</p>
      `,
    });
  } catch (error) {
    console.error("Email error:", error);
  }

  res.json({ message: "Registered successfully. Email sent!" });
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await db.collection("users").findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id.toString(), email: user.email },
    SECRET,
    { expiresIn: "7d" } 
  );

  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});


app.post("/blogs", verifyToken, async (req, res) => {
  const blog = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image || "",
    userId: req.user.id,
    createdAt: new Date(),
  };

  const result = await db.collection("blogs").insertOne(blog);

  res.json({ message: "Blog created", blogId: result.insertedId });
});

app.get("/blogs", async (req, res) => {
  const blogs = await db.collection("blogs").find().toArray();
  res.json(blogs);
});

app.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await db.collection("blogs").findOne({
      _id: new ObjectId(req.params.id),
    });

    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch {
    res.status(400).json({ message: "Invalid blog ID" });
  }
});

app.put("/blogs/:id", verifyToken, async (req, res) => {
  try {
    const result = await db.collection("blogs").updateOne(
      { _id: new ObjectId(req.params.id), userId: req.user.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(403).json({ message: "Unauthorized or blog not found" });
    }

    res.json({ message: "Blog updated successfully" });
  } catch {
    res.status(400).json({ message: "Invalid blog ID" });
  }
});


app.delete("/blogs/:id", verifyToken, async (req, res) => {
  try {
    const result = await db.collection("blogs").deleteOne({
      _id: new ObjectId(req.params.id),
      userId: req.user.id,
    });

    if (result.deletedCount === 0) {
      return res.status(403).json({ message: "Unauthorized or blog not found" });
    }

    res.json({ message: "Blog deleted" });
  } catch {
    res.status(400).json({ message: "Invalid blog ID" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
