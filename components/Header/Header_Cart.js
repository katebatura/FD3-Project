"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';

import { clearLocalStorage } from '../../LocalStorage/LocalStorage'

import './Header_Cart.css';

class Header_Cart extends React.PureComponent {
 
  static propTypes = {
    selectedProducts: PropTypes.object.isRequired, // передано из Redux
  };

  componentWillReceiveProps = (newProps) => {
    console.log(newProps)
    if(newProps.selectedProducts.productsQTY == 0) {
      clearLocalStorage();}
  };

  render() {

    return (
    <div className="header__cart">
      <NavLink to="/cart" className="breadcrumbs"> 
        <i className="fa fa-shopping-cart">
        {
          this.props.selectedProducts.productsQTY != 0 ?
          <div className = "cart-qty">{this.props.selectedProducts.productsQTY}</div> : null
        }
      </i>
      </NavLink>
    </div>
    );

  }

}

const mapStateToProps = function (state) {
  return {
    // весь раздел Redux state под именем counters будет доступен
    // данному компоненту как this.props.counters
    selectedProducts: state.selectedProducts,
  };
};

export default connect(mapStateToProps)(Header_Cart);