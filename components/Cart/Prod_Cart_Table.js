"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { qty_add, prod_del, sum_qty } from '../../redux/cartAC';

import { delLocalStorage, editLocalStorage } from '../../services/LocalStorage';
import { roundMod } from '../../services/roundMod';

import './Prod_Cart_Table.css';

class Prod_Cart_Table extends React.PureComponent {
  
  static propTypes = {
    info: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        //brand: PropTypes.string.isRequired,
        //description: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired,
        sum: PropTypes.number.isRequired,
      }),
  };
  

  deleteProduct = () => {
    this.props.dispatch( prod_del(this.props.info.id) ); 
    this.props.dispatch( sum_qty( - this.props.info.qty) );

    delLocalStorage(this.props.info.id);
  }

  changeQty = (e) => {
    let newQTY = +e.target.value;
    let newSum = roundMod(this.props.info.price * newQTY, 100)// округляем до вида 0,00
    
    this.props.dispatch( qty_add(this.props.info.id, newQTY, newSum) );
    this.props.dispatch( sum_qty(newQTY - this.props.info.qty) );

    let newInfo = {...this.props.info, qty: newQTY, sum: newSum};
    editLocalStorage(this.props.info.id, newInfo)
  }
  
  
  render() {

    return (
        <tr>
          <td><input type = "button" value = "&times;" onClick = {this.deleteProduct} title = "УДАЛИТЬ" className = "delProd-button" /></td>
          <td><img src = {this.props.info.img} className = "cart_img " /></td>
          <td>
            <NavLink to = {"/catalogue/"+ this.props.info.category + "/" + this.props.info.id} className = "cart_prodName " >
              {this.props.info.id}
            </NavLink>
          </td>
          <td><div className = "cart_prodPrice" >{this.props.info.price + " руб."}</div></td>
          <td>                
            <div className="CounterButton">
              <input type='number' step = "1" min = "0" defaultValue = {this.props.info.qty} onChange={this.changeQty} title = "Кол-во"  className = "prodQty-button"/>
            </div>
          </td>
          <td><div className = "cart_prodPrice">{this.props.info.sum + " руб."}</div></td>
        </tr>
        
    );
    
  }

}
    
const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};

export default connect(mapStateToProps)(Prod_Cart_Table);
