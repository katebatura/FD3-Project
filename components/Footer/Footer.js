"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import PagesLinks from '../../pages/PagesLinks';
import CategoriesLinks from '../../pages/CategoriesLinks';

import '../../styles/Footer/Footer.css';

class Footer extends React.PureComponent {


  render() {

    return (
        <footer className = "footer">
          <div className = "footer_shadow"></div>
          <div className = "footer-nav">
            <div className="footer-nav__block footer-nav__block1">
              <h3 className="footer-nav__title">Информация</h3>
              <PagesLinks />
            </div>
            <div className="footer-nav__block footer-nav__block2">
              <h3 className="footer-nav__title">Категории</h3>
              <CategoriesLinks />
            </div>
            <div className="footer-nav__block footer-nav__block3">
              <h3 className="footer-nav__title">Контакты</h3>
              <p>г. Минск ул. Гурского 3Б</p>
              <p>+375 (29) 682 10 32</p>
              <p>Время работы 09:00-19:00</p>
              <p>Без выходных</p>
            </div>
          </div>
          <div className="footer-copyright">
            &copy; 2019 VseMasla. All rights reserved 
          </div>
        </footer>
    );

  }

}

export default Footer;