"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
class Logo extends React.Component {

  
    render() {
  
      return (          
        <NavLink to="/" exact className="header__logo">
          <span className = "header__logo-text">VSE</span>
          <span className = "header__logo-span">MASLA</span>
        </NavLink>                        
      );
  
    }
  
  }
  
  export default Logo;