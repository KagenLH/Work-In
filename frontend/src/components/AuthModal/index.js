import { useDispatch } from 'react-redux';

import { closeLoginModal, closeSignupModal, showLoginModal, showSignupModal } from '../../store/modals';
import LoginForm from './AuthForms/LoginForm';
import './Modal.css'
import SignupFormPage from './AuthForms/SignupForm';

export default function Modal ({show, authType}) {
    const dispatch = useDispatch();

    if(!show) {
        return null;
    }

    return (
        <div className="auth-modal">
            <div className="auth-modal__content">
                <div className="auth-modal__header">
                    <button className="auth-modal__close" onClick={authType === 'login' ? () => dispatch(closeLoginModal()) : () => dispatch(closeSignupModal())}>X</button>
                    <h2 className={authType === 'login' ? 'auth-modal__title auth-modal__title-login' : 'auth-modal__title'}>
                        {authType === 'login' ? 
                        'Welcome back.'
                        :
                        'Welcome to Work-In.'}
                    </h2>
                </div>
                <div className="auth-modal__body">
                    {authType === 'login' ? 
                    <LoginForm/>
                    :
                    <SignupFormPage/>}
                    <div className="auth-modal__options-text">
                        {authType === 'login' ? 
                        'First time on Work-In?'
                        : 
                        'Have an account on Work-In already?'}
                        <button
                            className="auth-modal__options-button"
                            onClick={authType === 'login' ? 
                                    () => {
                                        dispatch(closeLoginModal());
                                        dispatch(showSignupModal());
                                    }
                                    :
                                    () => {
                                        dispatch(closeSignupModal());
                                        dispatch(showLoginModal());
                                    }}
                        >
                            {authType === 'login' ? 
                            'Create an account'
                            :
                            'Login'}
                            
                        </button>
                        or
                        <button
                            className="auth-modal__options-button"
                        >
                            Login as Demo user
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}