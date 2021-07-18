import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

import { logoutUser } from "../../store/session";

import './Navigation.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <>
      <button onClick={openMenu} className="open-menu-button">
        <i className="fas fa-user-cog" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.user.username}</li>
          <li>{user.user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;