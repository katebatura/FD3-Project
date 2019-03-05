"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import { delivery_chng } from '../../redux/cartAC';

import Order_Table from './Order_Table';

import './Order.css';

class Order extends React.PureComponent {
  
  static propTypes = {
    cart: PropTypes.object.isRequired//delivery: 0-самовывоз, 1-доставка по Минску, 2-доставка по РБ
  };
  

  changeDeliverySum = (num) => {
    switch(num) {
        case 0:
          return 0
        case 1:
          return 5   
        case 2:
          return 10
    }
  }

  changeDelivery = (e) => {
        this.props.dispatch( delivery_chng(+e.target.value) );
  }

  totalSum = 0;

  
  render() {

    let productsCode = [];
    this.totalSum = 0;

    for (let prod in this.props.cart.products) {
        productsCode.push(<Order_Table key = {this.props.cart.products[prod].id} info = {this.props.cart.products[prod]} />);
        
        this.totalSum += this.props.cart.products[prod].sum
    };

    return (
        <div>
            <h2>Оформление заказа:</h2>
            <div>

              <div>
				<label htmlFor="order-name" className="contacts-title">Выберите доставку</label><br />
				<select name="order-shiping" onChange = {this.changeDelivery} defaultValue = {this.props.cart.delivery}>
                    <option value = {0}>Самовывоз (г. Минск ул. Гурского 3Б) (0 руб)</option>
                    <option value = {1}>Доставка по Минску (5.00 руб)</option>
                    <option value = {2}>Доставка по Беларуси (от 10.00 руб)</option>
                </select>
			  </div>

              <div>
				<label htmlFor="order-name" className="contacts-title">Ваше имя</label><br />
				<input type="text" name="order-name" id="order-name" className="order-input"></input>
			  </div>

			  <div>
				<label htmlFor="order-email" className="contacts-title">Ваш email</label><br />
				<input type="email" name="order-email" id="order-email" className="order-input"></input>
			  </div>
							
			  <div>
				<label htmlFor="order-tel" className="contacts-title">Ваш телефон для связи</label><br />
				<input type="tel" name="order-tel" id="order-tel" className="order-input"></input>
			  </div>

			  <div>
				<label htmlFor="order-text" className="contacts-title">Комментарий</label><br />
				<textarea name="order-text" id="order-text"></textarea>
			  </div>
						
            </div>
            <table>
              <tbody>
                <tr>
                  <th>ТОВАР</th>
                  <th>Итого</th>
                </tr>

                {productsCode}

                {this.props.cart.delivery ?
                  <tr>
                    <th>Доставка</th>
                    <th>
                      {this.props.cart.delivery == 2 ?
                        'от ' + this.changeDeliverySum(this.props.cart.delivery) : 
                        this.changeDeliverySum(this.props.cart.delivery)
                      }
                    </th>
                  </tr> 
                  : null
                }

                <tr>
                  <th>Итого</th>
                  <th>
                    {this.props.cart.delivery == 2 ?
                     'от ' + (this.totalSum + this.changeDeliverySum(this.props.cart.delivery))
                     : this.totalSum + this.changeDeliverySum(this.props.cart.delivery)
                    }
                    {this.props.cart.delivery == 2 ?
                     <span><br />
                          Окончательная стоимость уточняется по телефону
                     </span> : null
                    }
                  </th>
                </tr>
              </tbody>
            </table>
            <input type="submit" name="order-submit" value="Оформить заказ" className="order-submit"></input>
        </div>        
    );
    
  }

}
    
const mapStateToProps = function (state) {
    return {    
        cart: state.cart,
      }; 
};

export default connect(mapStateToProps)(Order);
