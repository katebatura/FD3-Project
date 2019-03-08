import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/pages/CategoryLink.css';

class CategoriesLinks extends React.Component {
          
  render() {

    return (
      <ul className = "category-menu main-menu">
        <li><NavLink to="/catalogue/industrial-oils" className="CategoryLink PageLink">Масла индустриальные</NavLink></li>
        <li><NavLink to="/catalogue/cars-oils" exact className="CategoryLink PageLink">Моторные масла для легковых автомобилей</NavLink></li>
        <li><NavLink to="/catalogue/trucks-oils" className="CategoryLink PageLink">Моторные масла для грузовых автомобилей</NavLink></li>
        <li><NavLink to="/catalogue/moto-tech-oils" className="CategoryLink PageLink">Масла для мото-технки</NavLink></li>
        <li><NavLink to="/catalogue/transmission-oils" className="CategoryLink PageLink">Трансмиссионные масла</NavLink></li>
        <li><NavLink to="/catalogue/agr-tech-oils" className="CategoryLink PageLink">Масла для садовой и сельскохозяйственной техники</NavLink></li>
      </ul>
    );
    
  }

}
    
export default CategoriesLinks;
    