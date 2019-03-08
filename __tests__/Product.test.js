"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import combinedReducer from '../redux/reducers.js';
import { Provider } from 'react-redux';

import Product from '../components/Catalogue/Product';

const prod = {
  "id": 1,
  "name": "AZOLLA ZS 32",
  "brand": "TOTAL",
  "category": "Индустриальные масла",
  "price": 1052.94,
  "description": "Гидравлическое масло",
  "imgUrl": "./img/bochka.jpg",
  "qty": 1,
  "sum": 1052.94
};
    

let store=createStore(combinedReducer);

test('внешний вид и работа Product', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <Product info = {prod} />
      </Provider>
    </Router>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

        
});
