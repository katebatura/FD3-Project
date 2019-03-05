"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Logo from '../components/Header/Logo';

test('внешний вид Logo', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
  <Logo />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

    
});
