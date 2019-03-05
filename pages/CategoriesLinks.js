import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class CategoriesLinks extends React.Component {
          
  render() {

    return (
      <ul className = "main-menu">
        <li><NavLink to="/catalogue/compressor-oils" exact className="PageLink">Компрессорное масло</NavLink></li>
        <li><NavLink to="/catalogue/moto-tech-oils" className="PageLink">Масла для мото-технки</NavLink></li>
        <li><NavLink to="/catalogue/industrial-oils" className="PageLink">Масла индустриальные</NavLink></li>
        <li><NavLink to="/catalogue/motor-oils" className="PageLink">Моторные масла</NavLink></li>
        <li><NavLink to="/catalogue/transmission-oils" className="PageLink">Трансмиссионные масла</NavLink></li>
        <li><NavLink to="/catalogue/agr-tech-oils" className="PageLink">Масла для садовой и сельскохозяйственной техники</NavLink></li>
      </ul>
    );
    
  }

}
    
export default CategoriesLinks;
    