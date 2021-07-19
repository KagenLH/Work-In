import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signUp } from "../../../store/session";

export default function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     const errors = [];

    //     if(password !== confirmPassword) errors.push("Password fields must match.");
    //     if(!username.length) errors.push("Username is required for signup.");
    //     if(!email.length) errors.push("Email is required for signup.");
    //     if(!password.length) errors.push("Password is required for signup.");
    //     if(!confirmPassword.length) errors.push("You must confirm your password for signup.");
        
    //     setValidationErrors(errors);
    // }, [username, email, password, confirmPassword])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password === confirmPassword) {
            const user = await dispatch(signUp({username, email, password}));
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
            <form
                className="signup-form auth-form"
                onSubmit={handleSubmit}
            >
                <div
                    className="auth-form__label"
                >
                    <input
                        type="text"
                        name="username"
                        className="auth-form__input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    >
                    </input>
                    <span
                        className="floating-label"
                    >
                        Username
                    </span>
                </div>
                <div
                    className="auth-form__label"
                > 
                    <input
                        type="email"
                        name="email"
                        className="auth-form__input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    >
                    </input>
                    <span
                        className="floating-label"
                    >
                        E-mail address
                    </span>
                </div>
                <div
                    className="auth-form__label"
                >
                    <input
                        type="password"
                        name="password"
                        className="auth-form__input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    >
                    </input>
                    <span 
                        className="floating-label"
                    >
                        Password
                    </span>
                </div>
                <div
                    className="auth-form__label"
                >
                    <input
                        type="password"
                        name="confirmPassword"
                        className="auth-form__input"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    >
                    </input>
                    <span
                        className="floating-label"
                    >
                        Confirm Password
                    </span>
                </div>
                <button
                    className="auth-form__button"    
                    >
                        Sign Up
                </button>
            </form>
    )
}