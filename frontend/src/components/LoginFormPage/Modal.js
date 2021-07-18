import { useState, useEffect } from 'react';
import { loginUser } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

import './Modal.css'
import './LoginForm.css'

export default function Modal ({show}) {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    if(!show) {
        return null;
    }

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        const errors = [];

        if(!credential.length) errors.push("Must provide a username or email to login.");
        if(!password.length) errors.push("Must provide a password to login.");

        setValidationErrors(errors);
    }, [credential, password]);

    if(sessionUser) return (
        <Redirect to="/"/>
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await dispatch(loginUser({credential, password}));

        if(user) {
            return (
                <Redirect to="/"/>
            )
        }
    };

    const toggleModal = () => {

    };

    return (
        <div className="auth-modal">
            <div className="auth-modal__content">
                <div className="auth-modal__header">
                    <button className="auth-modal__close" onClick={toggleModal}>X</button>
                    <h2 className="auth-modal__title">Welcome to WorkIn</h2>
                </div>
                <div className="auth-modal__body">
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
                            Continue 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}