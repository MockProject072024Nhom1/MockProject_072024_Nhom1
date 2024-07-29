import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Login.module.css';
import loginImage from '../assets/images/login_maple.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5454/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const data = await response.json();

            // Navigate to the home screen
            navigate('/home', { state: { email } });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginSection}>
                <h2 className={styles.textCenter}>Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <div className="d-flex align-items-center">
                            <i className="bi bi-person-fill me-2"></i>
                            <label htmlFor="email" className="form-label mb-0">Email</label>
                        </div>
                        <div className={`input-group mt-1 ${styles.inputGroup}`}>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                aria-label="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="d-flex align-items-center">
                            <i className="bi bi-lock-fill me-2"></i>
                            <label htmlFor="password" className="form-label mb-0">Password</label>
                        </div>
                        <div className={`input-group mt-1 ${styles.inputGroup}`}>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                name="password" 
                                placeholder="*********" 
                                aria-label="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                        </div>
                    </div>
                    <div className={`d-flex justify-content-between align-items-center mb-3 ${styles.rememberForgot}`}>
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" /> Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className={styles.btnCustom}>Log in</button>
                </form>
                <div className={styles.createAccount}>
                    <p>Don't have an account? <a href="#">Create now</a></p>
                </div>
            </div>
            <div className={styles.welcomeSection}>
                <img src={loginImage} alt="NSG Security Logo" />
                <h1>Welcome To NSGSecure</h1>
                <p>Enter into a NEW World of Surveillance</p>
            </div>
        </div>
    );
};

export default Login;
