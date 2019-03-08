"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import combinedReducer from '../redux/reducers.js';
import { Provider } from 'react-redux';

import PaginationPage from '../components/Pagination/PaginationPage';
  
const prods = [{
    "id": 1,
    "name": "AZOLLA ZS 32",
    "brand": "TOTAL",
    "category": "Индустриальные масла",
    "price": 1052.94,
    "description": "Гидравлическое масло",
    "imgUrl": "./img/bochka.jpg",
    "qty": 1,
    "sum": 1052.94
  },
  {
    "id": 2,
    "name": "AZOLLA ZS 32",
    "brand": "TOTAL",
    "category": "Индустриальные масла",
    "price": 1052.94,
    "description": "Гидравлическое масло",
    "imgUrl": "./img/bochka.jpg",
    "qty": 1,
    "sum": 1052.94
  }
];

let store=createStore(combinedReducer);

test('внешний вид и работа PaginationPage', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <PaginationPage products = {prods}  startLink = {'/catalogue'} pagesQty = {0}/>
      </Provider>
    </Router>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // создаём 2 тестовую версию компонента
  const component2 = renderer.create(
    <Router>
      <Provider store={store}>
        <PaginationPage products = {prods}  startLink = {'/catalogue/category'} pagesQty = {1}/>
      </Provider>
    </Router>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree2=component2.toJSON();
  expect(componentTree2).toMatchSnapshot();
        
});
