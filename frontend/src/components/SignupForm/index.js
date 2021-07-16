import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signUp } from "../../store/session";

export default function SignupFormPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const errors = [];

        if(password !== confirmPassword) errors.push("Password fields must match.");
        if(!username.length) errors.push("Username is required for signup.");
        if(!email.length) errors.push("Email is required for signup.");
        if(!password.length) errors.push("Password is required for signup.");
        if(!confirmPassword.length) errors.push("You must confirm your password for signup.");
        
        setValidationErrors(errors);
    }, [username, email, password, confirmPassword])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password === confirmPassword) {
            const user = await dispatch(signUp({username, email, password, avatarUrl}));
            if(user) {
                return (
                    <Redirect to="/"/>
                )
            }
        } else {
            return setValidationErrors(['Confirm password field must match the Password field.']);
        }
    };

    return (
        <div
            className="signup-form-container"
        >
            <form
                className="signup-form auth-form"
                onSubmit={handleSubmit}
            >
                <ul
                    className="auth-errors-list"
                >
                    {validationErrors.map(error => (
                        <li key={error} className="auth-error">{error}</li>
                    ))}
                </ul>
                <label
                    className="auth-form__label"
                >
                    Username: 
                    <input
                        type="text"
                        name="username"
                        className="auth-form__input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    >
                    </input>
                </label>
                <label
                    className="auth-form__label"
                >
                    Email: 
                    <input
                        type="email"
                        name="email"
                        className="auth-form__input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    >
                    </input>
                </label>
                <label
                    className="auth-form__label"
                >
                    Password: 
                    <input
                        type="password"
                        name="password"
                        className="auth-form__input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    >
                    </input>
                </label>
                <label
                    className="auth-form__label"
                >
                    Confirm Password: 
                    <input
                        type="password"
                        name="confirmPassword"
                        className="auth-form__input"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    >
                    </input>
                </label>
                <button
                    className="auth-form__button"    
                    >
                        Sign Up
                </button>
            </form>
        </div>
    )
}