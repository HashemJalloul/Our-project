// src/Register.jsx
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for form submission goes here
        console.log('User Registered:', { email, username, password, confirmPassword });
    };

    return (
        <main className='register-page-container'>
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className="input-group">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email*"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder="Username*"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password*"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Confirm Password*"
                    />
                </div>
                <button type="submit" className="login-button">Register</button>
            </form>
        </div>
        </main>
    );
};

export default Register;
