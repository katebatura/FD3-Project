"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { prod_add, sum_qty } from '../../redux/cartAC';

import { setLocalStorage } from '../../LocalStorage/LocalStorage';

import './Product.css';

class ProdInfoPage extends React.PureComponent {
  
  static propTypes = { 
    info: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
      }),
  };

  state = {
    info: this.props.info,
  };

  
  newQTYRef = null;

  setNewQTYRef = (ref) => {
    this.newQTYRef = ref
  }

  addIntoCart = () => {
    let qty = +this.newQTYRef.value;
    let sum = qty * this.props.info.price;
    let info = {...this.state.info, qty: qty, sum: sum};

    this.props.dispatch( prod_add(this.state.info.id, info) ); //добавляем в корзину
    this.props.dispatch( sum_qty(qty) ); //добавляем количество продуктов в корзине для отображения в header

    setLocalStorage(this.state.info.id, info);
  }
  
  render() {

    return (
        <div className="product-container">
          <h3>{this.props.info.name}</h3>
          <img src = {this.props.info.img} className = "product-img" />
          <p>{this.props.info.price}</p>
          <input type='number' step = "1" min = "0" defaultValue = {1} title = "Кол-во" ref = {this.setNewQTYRef} />
          <input type = "button" value = "add" onClick = {this.addIntoCart} />
        </div>             
    );

  }

}

 
const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};

export default connect(mapStateToProps)(ProdInfoPage);
