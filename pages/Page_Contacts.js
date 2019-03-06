"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


import './Contacts.css';

class Page_Contacts extends React.PureComponent {
          
  render() {

    return (
      <div className = "contacts page">

        <h1 className="page-title">Контакты:</h1>

        <div className = "breadcrumbs-container">
          <NavLink to="/" exact className="breadcrumbs">Главная </NavLink>
          <span className="breadcrumbs-arr" > &rarr; </span>
          <NavLink to="/contacts" className="breadcrumbs">Контакты</NavLink>
        </div>
        <hr />

        <div className="content__contacts">
					<h3 className="page-subtitle"> Время работы магазина:</h3>
					<p className="text">понедельник - пятница: с 9.00 до 19.00 </p>
					<p className="text">суббота: с 10.00 до 15.00</p>
					<h3 className="page-subtitle"> Адрес магазина:</h3>
					<p className="text">г. Минск ул. Гурского 3Б</p>
					<h3 className="page-subtitle"> Телефон:</h3>
					<p className="text">+375 (29) 682 10 32</p>
          <p className = "text">Прием заказов по телефону с 9.00 до 21.00</p>
					<p className="text">Заказы через сайт принимаются круглосуточно.</p>
				</div>    
				    
				<h2 className="page-subtitle"> Карта проезда:</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.3292759730634!2d27.47996631582791!3d53.89035118009663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdab010fa1fd7%3A0xbf2f2817fa302745!2z0YPQuy4g0JPRg9GA0YHQutC-0LPQviAz0LEsINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1550439153916" width="600" height="450" frameBorder="0" allowFullScreen className = "contacts-map" ></iframe>

        
				<div className="contacts__feedback">
					<h2 className="contacts-subtitle">Обратная связь</h2>
					<hr />
					<form className="contacts__feedback-form">
						<div className = "feedback-form__container">

							<div>
								<label htmlFor="feedback-name" className="contacts-title">Ваше имя</label><br />
								<input type="text" name="feedback-name" id="feedback-name" className="feedback-input"></input>
							</div>

							<div>
								<label htmlFor="feedback-email" className="contacts-title">Ваш email</label><br />
								<input type="email" name="feedback-email" id="feedback-email" className="feedback-input"></input>
							</div>
							
							<div>
								<label htmlFor="feedback-tel" className="contacts-title">Ваш телефон для связи</label><br />
								<input type="tel" name="feedback-tel" id="feedback-tel" className="feedback-input"></input>
							</div>

							<div>
								<label htmlFor="feedback-text" className="contacts-title">Ваш вопрос</label><br />
								<textarea name="feedback-text" id="feedback-text"></textarea>
							</div>
						</div> <br />

						<input type="submit" name="feedback-submit" value="Отправить" className="feedback-submit"></input>
					
					</form>
				</div>
      </div>
    );
    
  }

}
    
export default Page_Contacts;
    