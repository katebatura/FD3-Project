import React from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Page_About extends React.PureComponent {
          
  render() {

    return (
      <div  className = "about page">
        <h1 className="page-title">О компании:</h1>
        <div className = "breadcrumbs-container">
          <NavLink to="/" exact className="breadcrumbs">Главная </NavLink>
          <span> &rarr; </span>
          <NavLink to="/about" className="breadcrumbs">О нас</NavLink>
        </div>
      </div>
    );
    
  }

}
    
export default Page_About;
    