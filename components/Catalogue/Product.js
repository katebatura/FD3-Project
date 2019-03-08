"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { prod_add, sum_qty } from '../../redux/cartAC';

import { setLocalStorage } from '../../services/LocalStorage';
import { roundMod } from '../../services/roundMod';

import OkButton from './OkButton'

import '../../styles/Catalogue/Product.css';

class Product extends React.PureComponent {
  
  static propTypes = { 
    info: PropTypes.shape({
       id: PropTypes.number.isRequired,
       name: PropTypes.string.isRequired,
       brand: PropTypes.string.isRequired,
       imgUrl: PropTypes.string.isRequired,
       price: PropTypes.number.isRequired,
       category: PropTypes.string.isRequired,
       description: PropTypes.string.isRequired,
      }),
  };

  state = {
    info: this.props.info,
    inCart:0, //1-in Cart
  };

  
  newQTYRef = null;

  setNewQTYRef = (ref) => {
    this.newQTYRef = ref
  }

  addIntoCart = () => {
    let qty = +this.newQTYRef.value;
    let sum = roundMod(qty * this.props.info.price, 100); // округляем до вида 0,00
    let info = {...this.state.info, qty: qty, sum: sum};

    this.props.dispatch( prod_add(this.state.info.id, info) ); //добавляем в корзину
    this.props.dispatch( sum_qty(qty) ); //добавляем количество продуктов в корзине для отображения в header

    setLocalStorage(this.state.info.id, info);

    this.setState( {inCart:1} );
  }
  
  render() {

    return (
        <div className="product-wrap">
          <h3>
            <NavLink to = {"/catalogue/"+ this.props.info.category + "/" + this.props.info.id} className = "product-title">
              {this.props.info.name}
            </NavLink>
          </h3>
          <NavLink to = {"/catalogue/"+ this.props.info.category + "/" + this.props.info.id} className = "product-title product-img-container">
            <img src = {this.props.info.imgUrl} className = "product-img" />
          </NavLink>
          <p>{this.props.info.price + " руб."}</p>
          <div className = "addCart-block">
            <input type='number' step = "1" min = "0" defaultValue = {1} title = "Кол-во" ref = {this.setNewQTYRef} className = "addQty_button" />
            <button onClick = {this.addIntoCart} className = {this.state.inCart == 1? "addCart_button inCart" : "addCart_button"} title = "Добавить в корзину">
              {this.state.inCart != 1 ? 
                <i className="fas fa-cart-arrow-down"></i> 
                :<NavLink to = "/cart">в корзинy</NavLink> 
              }              
            </button>
            <OkButton  class = {this.state.inCart !=1 ? 'invisibleOkButton':'visibleOkButton'}/>
          </div>
        </div>          
    );

  }

}

 
const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};

export default connect(mapStateToProps)(Product);
