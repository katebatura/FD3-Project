"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import GoTopButton from '../components/GoTopButton'
import {goTop} from '../services/GoTop'

import '../styles/pages/Main.css';

class Main extends React.PureComponent {

  componentDidMount() {
    $(document).ready(function(){
        $('.main-slider').slick({
			  	dots: true,
			    slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000
			  });

			  $('.reviews-container').slick({
			  	dots: false,
			    slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: false,
				responsive: [
    
				    {
				      breakpoint: 900,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    },
				    {
				      breakpoint: 580,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				  ]
      });
    });

            
      $(function() {
      $("#go-top").scrollToTop(); //import from goTop
      });
    
  }

  

  
  render() {

    return (
      <div>

        <section className="main-slider">

          <div className="main-slider-item">
            <img src="../img/slider/slider3.jpg" className="main-slider-item__img" />
          </div>

          <div className="main-slider-item">
            <img src="../img/slider/slider1.jpg" className="main-slider-item__img"  />	
          </div>

          <div className="main-slider-item">
            <img src="../img/slider/slider4.jpg" className="main-slider-item__img" />		
          </div>

        </section>

        <section className = "icon_container">

          <div className = "icon-box icon-box1">
            <i className="far fa-question-circle icon-box_icon"></i>
            <h3 className = "icon-box_title">Консультации</h3>
            <p className = "icon-box_text">Позвоните к нам и Вы получите бесплатную консультацию профессионалов, которые помогут подобрать масло, фильтра или любые другие запчасти на Ваш автомобиль.</p>
          </div>

          <div className = "icon-box icon-box2">
            <i className="fas fa-american-sign-language-interpreting icon-box_icon"></i>
            <h3 className = "icon-box_title">Гарантия качества</h3>
            <p className = "icon-box_text">Вся продукция, которая представлена в нашем интернет-магазине является оригинальной. Товары имеют сертификаты соответстия и актуальный срок годности.</p>
          </div>
          
          <div className = "icon-box icon-box3">
            <i className="fas fa-globe icon-box_icon"></i>            
            <h3 className = "icon-box_title">Доставка</h3>
            <p className = "icon-box_text">Мы всегда можем доставить Вам товар в любую точку Минска, а также РБ. Ваше удобство - наша забота!</p>
          </div>

        </section>

        <section className="description">
          <h2 className="description__title">Добро пожаловать</h2>
          <p>Мы подобрали для вас широкий выбор масел для всех существующих моделей двигателей и марок машин. Приглашаем посетить наш <NavLink to="/catalogue">каталог</NavLink>, где вы можете ознакомиться с нашей продукцией, купить которую вы можете из имеющейся в наличии или под заказ. Если у Вас возникнут вопросы, позвоните нам и Вы получите бесплатную консультацию профессионалов, которые помогут подобрать масло, фильтра или любые другие запчасти на Ваш автомобиль.</p>
          <p>У нас Вы всегда сможете найти товар по лучшей цене. Также, следите за проводимыми акциями, которые позволят выгодно преобрести необходимю продукцию.</p>
          <p>Вся продукция, которая представлена в нашем интернет-магазине является оригинальной. Товары имеют сертификаты соответстия и актуальный срок годности. Мы дорожим Вашим доверием!</p>
        </section>

        <GoTopButton />

      </div>
    );

  }

}

export default Main;
