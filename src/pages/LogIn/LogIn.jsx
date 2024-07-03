// src/LogIn.jsx
import React, { useState } from 'react';
import './LogIn.css';

const LogIn = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { username, password, remember };
        setUsers([...users, newUser]);
        console.log('User added:', users);
    };

    return (
      <main className='login-page-container'>
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="input-group">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder="Email or username*"
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
                <div className="remember-me">
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                    />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button type="submit" className="login-button">Login</button>
                <a href="#" className="forgot-password">Lost your password?</a>
            </form>
        </div></main>
    );
};

export default LogIn;
