import { useState, useEffect } from 'react';
import { loginUser } from '../../../store/session';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './AuthForm.css';


export default function LoginForm() {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const errors = [];

        if(!credential.length) errors.push("Must provide a username or email to login.");
        if(!password.length) errors.push("Must provide a password to login.");

        setValidationErrors(errors);
    }, [credential, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await dispatch(loginUser({credential, password}));

        if(user) {
            return (
                <Redirect to="/"/>
            )
        }
    };

    return (
            <form 
                className="login-form auth-form"
                onSubmit={handleSubmit}
            >
                <label
                    htmlFor="credential"
                    className="auth-form__label"
                >
                    Username or E-Mail
                </label>
                <input
                    type="text" 
                    name="credential"
                    id="login-form__credential"
                    className="auth-form__input"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    />
                <label 
                    htmlFor="password"
                    className="auth-form__label"
                    >
                        Password
                    </label>
                <input
                    type="text"
                    name="password"
                    id="login-form__password"
                    className="auth-form__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button
                    className="auth-form__button"
                    disabled={validationErrors.length ? true : false}
                    >
                    Login 
                </button>
            </form>
    );
}