import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {events} from '../services/events';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <ul className = "main-menu">
        <li><NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink></li>
        <li><NavLink to="/catalogue" className="PageLink" activeClassName="ActivePageLink" onClick = {this.removeFilter}>Каталог</NavLink></li>
        <li><NavLink to="/about" className="PageLink" activeClassName="ActivePageLink">О нас</NavLink></li>
        <li><NavLink to="/contacts" className="PageLink" activeClassName="ActivePageLink">Контакты</NavLink></li>
        <li><NavLink to="/cart" className="PageLink" activeClassName="ActivePageLink">Корзина</NavLink></li>
      </ul>
    );
    
  }

}
     
export default PagesLinks;
    