"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './GoTopButton.css'

class GoTopButton extends React.Component {

  
    render() {
  
      return (          
        <a href="#" id="go-top" title="Вверх"><i className="fas fa-angle-up"></i></a>                       
      );
  
    }
  
  }
  
  export default GoTopButton;