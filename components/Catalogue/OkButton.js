"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import '../../styles/Catalogue/OkButton.css'

class OkButton extends React.Component {

    static proptypes = {
        class: PropTypes.string.isRequired,
    }
  
    render() {
  
      return (          
        <div className = {this.props.class}>
            <i className="fas fa-check"></i>
        </div>                        
      );
  
    }
  
  }
  
  export default OkButton;