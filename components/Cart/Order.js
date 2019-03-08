"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import { delivery_chng } from '../../redux/cartAC';

import { roundMod } from '../../services/roundMod';
import { checkNameValue, checkEmailValue, checkTelValue  } from '../../services/checkForm';

import Order_Table from './Order_Table';

import '../../styles/Cart/Order.css';
import '../../styles/Cart/Order_Table.css';

class Order extends React.PureComponent {
  
  static propTypes = {
    cart: PropTypes.object.isRequired//delivery: 0-самовывоз, 1-доставка по Минску, 2-доставка по РБ
  };

  state = {
    name: '',
    email: '',
    tel: '',
    errorName: 0, //0-нет ошибки, 1-пустое значение, 2-неверное значение
    errorEmail: 0, //0-нет ошибки, 1-нет ошибки тк не обязат поле, 2-неверное значение
    errorTel: 0, //0-нет ошибки, 1-пустое значение, 2-неверное значение

  }
  

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

  
  changeName = (e)=> {
    this.setState( {name: e.target.value, errorName: 0} );
  };
  checkName = () => {
    let check = checkNameValue(this.state.name);
    this.setState( {errorName: check} );
  };

  changeEmail = (e)=> {
    this.setState( {email: e.target.value, errorEmail: 0} );
  };
  checkEmail = () => {
    let check = checkEmailValue(this.state.email);
    this.setState( {errorEmail: check} );
  };

  changeTel = (e)=> {
    this.setState( {tel: e.target.value, errorTel: 0} );
  };
  checkTel = () => {
    let check = checkTelValue(this.state.tel);
    this.setState( {errorTel: check} );
  };

  checkForm = (e) => {
    this.checkName();
    this.checkTel();

    if(this.state.errorName || this.state.errorEmail || this.state.errorTel) {
      e.preventDefault();
    }
  }
  
  render() {

    let productsCode = [];
    this.totalSum = 0;

    for (let prod in this.props.cart.products) {
        productsCode.push(<Order_Table key = {this.props.cart.products[prod].id} info = {this.props.cart.products[prod]} />);
        
        this.totalSum += this.props.cart.products[prod].sum
    };

    return (
        <div>
          <hr />
          <h2>Оформление заказа:</h2>

          <div className = "order">

            <div>
				      <label htmlFor="order-name" className="order-title">Выберите доставку</label><br />
              <select name="order-shiping"  className="order-input"
                onChange = {this.changeDelivery} defaultValue = {this.props.cart.delivery}>
                <option value = {0}>Самовывоз (г. Минск ул. Гурского 3Б) (0 руб)</option>
                <option value = {1}>Доставка по Минску (5.00 руб)</option>
                <option value = {2}>Доставка по Беларуси (от 10.00 руб)</option>
              </select>
			      </div>

            <div>
				      <label htmlFor="order-name" className="order-title">Ваше имя *</label><br />
              <input type="text" name="order-name" id="order-name" className="order-input"
                onChange = {this.changeName} onBlur = {this.checkName} />
              <span className = {this.state.errorName == 1 ? "visible" : "invisible"}> * Обязательное для заполнения поле</span>
              <span className = {this.state.errorName == 2 ? "visible" : "invisible"}> * Введите до 30 буквенных символов</span>
			      </div>

            <div>
              <label htmlFor="order-email" className="order-title">Ваш email</label><br />
              <input type="email" name="order-email" id="order-email" className="order-input" 
                onChange = {this.changeEmail} onBlur = {this.checkEmail}  />
              <span className = {this.state.errorEmail == 2 ? "visible" : "invisible"}> * Некорректный email </span>
            </div>
							
            <div>
              <label htmlFor="order-tel" className="order-title">Ваш телефон для связи *</label><br />
              <input type="tel" name="order-tel" id="order-tel" className="order-input"
                onChange = {this.changeTel} onBlur = {this.checkTel}  />
              <span className = {this.state.errorTel == 1 ? "visible" : "invisible"}> * Обязательное для заполнения поле</span>
              <span className = {this.state.errorTel == 2 ? "visible" : "invisible"}> * Некорректный номер телефона</span>
            </div>

            <div>
              <label htmlFor="order-text" className="order-title">Комментарий</label><br />
              <textarea name="order-text" id="order-text" className = "order-textarea"></textarea>
            </div>
						
          <table className = "order-table">
            <tbody>
              <tr>
                <th>ТОВАР</th>
                <th>Сумма</th>
              </tr>

              {productsCode}

              {this.props.cart.delivery ?
                <tr>
                  <td>Доставка</td>
                  <td>
                    {this.props.cart.delivery == 2 ?
                      'от ' + this.changeDeliverySum(this.props.cart.delivery) + " руб." : 
                      this.changeDeliverySum(this.props.cart.delivery) + " руб."
                    }
                  </td>
                </tr> 
                : null
              }

              <tr>
                <th>Итого:</th>
                <th>
                  {this.props.cart.delivery == 2 ?
                    'от ' + roundMod(this.totalSum + this.changeDeliverySum(this.props.cart.delivery), 100) + " руб."
                    : roundMod(this.totalSum + this.changeDeliverySum(this.props.cart.delivery), 100) + " руб."
                  }
                  {this.props.cart.delivery == 2 ?
                    <span className = "remark"><br />
                      * Окончательная стоимость уточняется по телефону
                    </span> : null
                  }
                </th>
              </tr>
            </tbody>
          </table>
            
					<div className = "feedback-submit-container">
						<input type="submit" name="feedback-submit" value="Оформить заказ" className="feedback-submit" onClick = {this.checkForm}></input>
					</div>
          
          </div>
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
