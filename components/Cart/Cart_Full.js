"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import Prod_Cart_Table from './Prod_Cart_Table';
import Order from './Order';

import {connect} from 'react-redux';

import './Cart_Full.css';

class Cart_Full extends React.PureComponent {
  
  static propTypes = {
    cart: PropTypes.object.isRequired
  };

  state = {
    cart: this.props.cart,
  }

  
  componentWillReceiveProps = (newProps) => {
    this.setState( {cart: newProps.cart} );
  };
  
  
  render() {

    let productsCode = [];
    for (let prod in this.state.cart.products) {
      productsCode.push(<Prod_Cart_Table key = {this.state.cart.products[prod].id} info = {this.state.cart.products[prod]} />)
    };

    return (
        <div className = "cart-full">
          <table className = 'cart-table'>
            <tbody>
              <tr>
                <th></th>
                <th></th>
                <th>Товар</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Итого</th>
              </tr>
              {productsCode}
            </tbody>
          </table>
          <Order />
        </div>
        
    );
    
  }

}
    
const mapStateToProps = function (state) {
  return {    
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart_Full);