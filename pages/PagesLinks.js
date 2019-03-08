import React from 'react';
import { NavLink } from 'react-router-dom';

import CategoriesLinks from './CategoriesLinks';


import '../styles/pages/PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <ul className = "main-menu">
        <li><NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink></li>
        <li>
          <NavLink to="/catalogue" className="PageLink catalogueLink" activeClassName="ActivePageLink" onClick = {this.removeFilter}>
            Каталог
          </NavLink>
          <CategoriesLinks />
        </li>
        <li><NavLink to="/about" className="PageLink" activeClassName="ActivePageLink">О нас</NavLink></li>
        <li><NavLink to="/contacts" className="PageLink" activeClassName="ActivePageLink">Контакты</NavLink></li>
        <li><NavLink to="/cart" className="PageLink" activeClassName="ActivePageLink">Корзина</NavLink></li>
      </ul>
    );
    
  }

}
     
export default PagesLinks;
    