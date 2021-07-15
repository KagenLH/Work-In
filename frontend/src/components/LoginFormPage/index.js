import { useState, useEffect } from 'react';
import { loginUser } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


export default function LoginFormPage() {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

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

    return (
        <div className="login-form-container">
            <form 
                className="login-form auth-form"
                onSubmit={handleSubmit}
            >
                <label htmlFor="credential">Username or E-Mail</label>
                <input
                    type="text" 
                    name="credential"
                    id="login-form__credential"
                    className="auth-form__input"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    />
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    name="password"
                    id="login-form__password"
                    className="auth-form__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button
                    disabled={validationErrors.length ? true : false}
                    >
                    Login 
                </button>
            </form>
        </div>
    );
}