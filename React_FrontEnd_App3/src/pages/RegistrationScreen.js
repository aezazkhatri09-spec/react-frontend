import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RegistrationScreen = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password, 
                    confirmPassword: formData.confirmPassword
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            login(data.user, data.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-top-wave"></div>

            <div className="auth-content">

                <div className="text-center mb-4">
                    <span className="text-white">9:30 PM</span>
                </div>

                <div className="auth-card">
                    <svg width="200" height="183" viewBox="0 0 200 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cy="83" r="100" fill="#8FE1D7" fill-opacity="0.5" />
                        <circle cx="100" cy="13" r="100" fill="#8FE1D7" fill-opacity="0.5" />
                    </svg>
                    <br />
                    <br />
                    <h2 className="auth-title text-center">Welcome to Onboard!</h2>
                    <p className="auth-subtitle text-center">Let's help to meet up your tasks.</p>

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="auth-input"
                            placeholder="Enter your full name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            className="auth-input"
                            placeholder="Enter your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            className="auth-input"
                            placeholder="Enter Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            className="auth-input"
                            placeholder="Confirm password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                        <button
                            type="submit"
                            className="auth-btn"
                            disabled={loading}
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                    </form>

                    <div className="auth-footer">
                        Already have an account? <Link to="/login" className="auth-link">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationScreen;
