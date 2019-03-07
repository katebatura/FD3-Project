import React from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import GoTopButton from '../components/GoTopButton'
import {goTop} from '../services/GoTop'

import './About.css';

class Page_About extends React.PureComponent {
          
  componentDidMount() {            
      $(function() {
        $("#go-top").scrollToTop(); //import from goTop
      });
    
  }

  render() {

    return (
      <div  className = "about page">
        <h1 className="page-title">О компании:</h1>

        <div className = "breadcrumbs-container">
          <NavLink to="/" exact className="breadcrumbs">Главная </NavLink>
          <span> &rarr; </span>
          <NavLink to="/about" className="breadcrumbs">О нас</NavLink>
        </div>
        <hr />

        <section className="description">
          <ul className = "about-list">
            <li>VseMasla.by — это официальный специализированный магазин масел и технических жидкостей </li>
            <li>Мы не продаем все подряд. Мы продаем, только то, в чем уверены и что используем сами не первый год. Всегда приятно продавать качественную продукцию, за которую не стыдно перед покупателем.</li>
            <li>У нас только оригинальная и сертифицированная продукция.  Гарантия качества. По желанию клиента предоставляем все необходимые сертификаты на продукцию, что очень важно при обслуживании гарантийных автомобилей на фирменных СТО.</li>
            <li>У нас действительно честные цены! </li>
            <li>Консультации. Мы предоставляем качественный сервис по подбору масел и технических жидкостей. Мы будем рады подобрать Вам оптимальную продукцию для Вашей техники, учитывая стиль вождения и условия эксплуатации.</li>
            <li>Масло – это не просто очередной расходник, это показатель вашего отношения к своей технике! Выбирайте безупречное качество продукции для своих автомобилей, мотоциклов, квадроциклов, лодок, катеров, снегоходов. Мы не подведем!</li>
          </ul>
        </section>

        <GoTopButton /> 
        
      </div>
    );
    
  }

}
    
export default Page_About;
    