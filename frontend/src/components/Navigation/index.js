import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ProfileButton from './ProfileButton';
import './Navigation.css';


export default function Navigation() {
    const sessionUser = useSelector(state => state.session.user);

    const handleLogout = () => {

    };
 
    return (
        <div className="nav-bar">
            <ul className="nav-links">
                <NavLink exact to="/" className="nav-link" activeClassName="nav-link-active">Home</NavLink>
                {sessionUser !== null ? 
                <ProfileButton onClick={handleLogout} className="logout-button" user={sessionUser}/>
                :
                <>
                <NavLink to="/signup" className="nav-link" activeClassName="nav-link-active">Sign Up</NavLink>
                <NavLink to="/login" className="nav-link" activeClassName="nav-link-active">Login</NavLink>
                </>}
            </ul>
        </div>
    );
}