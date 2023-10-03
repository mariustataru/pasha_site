import React, { useState } from 'react';
import './Header.scss'
import search_icon from '../Assets/search.png'
import menu_icon from '../Assets/menu.svg'
import user_icon from '../Assets/account.svg'


const Header = () => {

  return (

    <div className="header-section d-flex">
      <div className='logo col-md-4 linear-text'>Ask&Share</div>
      <div className="search col-md-4">
        <input className='search-input' type="text" placeholder='Search for a mentor'/>
        <img className='search-icon' src={search_icon} alt="" />
      </div>
      <div className="profile-menu col-md-4">
        <div className="share-experience linear-text">Share your Experience</div>
        <div className="side-bar">
          <img className='menu icon' src={menu_icon} alt="" />
          <img className='user icon' src={user_icon} alt="" />
        </div>
      </div>

    </div>
  );
}

export default Header;