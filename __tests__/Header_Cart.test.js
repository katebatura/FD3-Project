"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import combinedReducer from '../redux/reducers.js';
import { Provider } from 'react-redux';

import Header_Cart from '../components/Header/Header_Cart';


let store=createStore(combinedReducer);

test('внешний вид Header_Cart', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <Header_Cart />
      </Provider>
    </Router>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

      
});
