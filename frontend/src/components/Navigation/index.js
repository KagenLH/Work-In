import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

import ProfileButton from './ProfileButton';
import { showLoginModal, showSignupModal} from '../../store/modals';
import SearchBar from '../SearchBar';

import './Navigation.css';
import logo from '../../assets/images/work-in-logo.png';

export default function Navigation() {
    const currentUrl = useLocation();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
 
    return (
        <div className="nav-bar" style={currentUrl.pathname.includes("/listings") ? {width: '1000px', left: '51%', transform: 'translateX(-50%)', height: '70px', justifyContent: 'space-between'} : {width: '100%', zIndex: '1'} }>
            {currentUrl.pathname.includes("listings") && 
            <>
                <NavLink exact to="/" className="nav-bar-logo">
                    <img src={logo} className="nav-bar-logo-image" alt="\A"/>
                </NavLink>
                <SearchBar context="nav"/>
            </>
            }
            <ul className="nav-links">
                <NavLink exact to="/" className="nav-link" activeClassName="nav-link-active">Home</NavLink>
                <NavLink exact to="/listings" className="nav-link" activeClassName="nav-link-active">Listings</NavLink>
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