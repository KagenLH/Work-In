import { useDispatch } from 'react-redux';

import { closeLoginModal, closeSignupModal } from '../../store/modals';
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
                    <h2 className="auth-modal__title">Welcome to WorkIn</h2>
                </div>
                <div className="auth-modal__body">
                    {authType === 'login' ? 
                    <LoginForm/>
                    :
                    <SignupFormPage/>}
                </div>
            </div>
        </div>
    );
}