import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ProfileButton from './ProfileButton';
import { showLoginModal, showSignupModal} from '../../store/modals';

import './Navigation.css';


export default function Navigation() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
 
    return (
        <div className="nav-bar">
            <ul className="nav-links">
                <NavLink exact to="/" className="nav-link" activeClassName="nav-link-active">Home</NavLink>
                {sessionUser !== null ? 
                <ProfileButton className="logout-button" user={sessionUser}/>
                :
                <>
                <button onClick={() => dispatch(showSignupModal())} className="nav-auth-button">Sign Up</button>
                <button onClick={() => dispatch(showLoginModal())} className="nav-auth-button">Login</button>
                </>}
            </ul>
        </div>
    );
}