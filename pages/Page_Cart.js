import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { prod_add, sum_qty } from '../redux/cartAC';

import { checkLocalStorage, getLocalStorage } from '../LocalStorage/LocalStorage'

import Cart_Empty from '../components/Cart/Cart_Empty';
import Cart_Full from '../components/Cart/Cart_Full';

class Page_Cart extends React.PureComponent {
    
  static propTypes = {
    cart: PropTypes.object.isRequired, // передано из Redux
  };

  componentDidMount = () => {
    let l = Object.keys(this.props.cart.products).length;
    if(l == 0) {
      if( checkLocalStorage() ) {
        let data = getLocalStorage();
        for(let prod in data) {
          this.props.dispatch( prod_add(prod, data[prod]) ); //добавляем в корзину
          this.props.dispatch( sum_qty(data[prod].qty) ); //добавляем количество продуктов в корзине для отображения в header
        }
      };      
    }
  };
          
  render() {
    let l = Object.keys(this.props.cart.products).length;

    return (
      <div className = "cart page">
        <h1 className="page-title">Корзина:</h1>
        <div className = "breadcrumbs-container">
          <NavLink to="/" exact className="breadcrumbs">Главная </NavLink>
          <span> &rarr; </span>
          <NavLink to="/cart" className="breadcrumbs"> Корзина</NavLink>
        </div>
        {
          l == 0 ? 
          <Cart_Empty /> : <Cart_Full />          
        }
        
      </div>
    );
    
  }

}

const mapStateToProps = function (state) {
  return {
    // весь раздел Redux state под именем counters будет доступен
    // данному компоненту как this.props.counters
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Page_Cart);