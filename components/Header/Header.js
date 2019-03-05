"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import PagesLinks from '../../pages/PagesLinks';

import Header_Cart from './Header_Cart';
import Logo from './Logo';
import Search from './Search';

import './Header.css';

class Header extends React.Component {

    
  render() {

    return (
        <header>
          <div className="header-container">
            <Logo />      
            <div className="header__tel">
              <p>Закажите онлайн или по телефону: +375 (29) 682 10 32</p>
            </div>
            <Header_Cart />
          </div>

          <div className="header-container1">
            <div className = "header-nav">
              <div className = "header_main-menu">
                <PagesLinks />
              </div>          
              <div className = "search"><Search /></div>
            </div>          
          </div>
          
        </header>
    );

  }

}

export default Header;
