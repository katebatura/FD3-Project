"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { qty_add, prod_del, sum_qty } from '../../redux/cartAC';

import { delLocalStorage, editLocalStorage } from '../../LocalStorage/LocalStorage';

import './Prod_Cart_Table.css';

class Prod_Cart_Table extends React.PureComponent {
  
  static propTypes = {
    info: PropTypes.shape({
        //id: PropTypes.number.isRequired,
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
    this.props.dispatch( prod_del(this.props.info.name) ); 
    this.props.dispatch( sum_qty( - this.props.info.qty) );

    delLocalStorage(this.props.info.name);
  }

  changeQty = (e) => {
    let newQTY = +e.target.value;
    let newSum = this.props.info.price * newQTY
    this.props.dispatch( qty_add(this.props.info.name, newQTY, newSum) );
    this.props.dispatch( sum_qty(newQTY - this.props.info.qty) );

    let newInfo = {...this.props.info, qty: newQTY, sum: newSum};
    editLocalStorage(this.props.info.name, newInfo)
  }
  
  
  render() {

    return (
        <tr>
          <td><input type = "button" value = "&times;" onClick = {this.deleteProduct} title = "УДАЛИТЬ" /></td>
          <td><img src = {this.props.info.img} className = "product-img" /></td>
          <td><NavLink to = {"/catalogue/"+ this.props.info.category + "/" + this.props.info.name}>{this.props.info.name}</NavLink></td>
          <td>{this.props.info.price}</td>
          <td>                
            <div className="CounterButton">
              <input type='number' step = "1" min = "0" defaultValue = {this.props.info.qty} onChange={this.changeQty} title = "Кол-во" />
            </div>
          </td>
          <td>{this.props.info.sum}</td>
        </tr>
        
    );
    
  }

}
    
const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};

export default connect(mapStateToProps)(Prod_Cart_Table);
