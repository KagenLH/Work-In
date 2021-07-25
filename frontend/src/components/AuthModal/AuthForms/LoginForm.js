import { useState } from 'react';
import { loginUser } from '../../../store/session';
import { useDispatch } from 'react-redux';

import './AuthForm.css';
import FormErrors from '../../FormErrors';
import { closeLoginModal } from '../../../store/modals';


export default function LoginForm() {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(credential.length && password.length) {

            try {
                await dispatch(loginUser({credential, password}));
                dispatch(closeLoginModal());
            } catch (e) {
                const err = await e.json();
                const errors = err.errors;
                setValidationErrors(errors);
            }
        }
    };

    return (
            <form 
                className="login-form auth-form"
                onSubmit={handleSubmit}
            >
                <FormErrors errors={validationErrors} keyword="email"/>
                <div
                    className="auth-form__label"
                >
                    <input
                        type="text" 
                        name="credential"
                        id="login-form__credential"
                        className="auth-form__input"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                    <span 
                        className="floating-label"
                    >
                        Username or Email
                    </span>
                </div>
                <FormErrors errors={validationErrors} keyword="password"/>
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
                    />
                    <span
                        className="floating-label"
                    >
                        Password
                    </span>
                </div>
  
                <button
                    className="auth-form__button"
                    disabled={validationErrors.length ? true : false}
                    >
                    Login 
                </button>
            </form>
    );
}