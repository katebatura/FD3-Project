"use strict";

import {checkNameValue, checkEmailValue, checkTelValue, checkTextValue} from '../services/checkForm';

test('проверка валидации имени', () => {

  expect(checkNameValue('')).toBe(1);

  expect(checkNameValue('25wrong')).toBe(2);

  expect(checkNameValue('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe(2);

  expect(checkNameValue('trueName')).toBe(0);
  
  expect(checkNameValue('корректное имя')).toBe(0);

});

test('проверка валидации email', () => {

    expect(checkEmailValue('')).toBe(0);
  
    expect(checkEmailValue('aaaaa')).toBe(2);
  
    expect(checkEmailValue('aaa@aaa')).toBe(2);
    
    expect(checkEmailValue('aaa@aa.a')).toBe(2);
  
    expect(checkEmailValue('ex@gmail.com')).toBe(0);
    
    expect(checkEmailValue('ex@info.gov')).toBe(0);
  
  });
  
test('проверка валидации телефонного номера', () => {

    expect(checkTelValue('')).toBe(1);
  
    expect(checkTelValue('25wrong')).toBe(2);
  
    expect(checkTelValue('56548848')).toBe(2);
  
    expect(checkTelValue('+2568787987')).toBe(2);
    
    expect(checkTelValue('+375(29)1110022')).toBe(0);

    expect(checkTelValue('8044-111-22-33')).toBe(0);
  
  });

  
test('проверка заполнения текстовой формы', () => {

    expect(checkTextValue('')).toBe(1);
  
    expect(checkTextValue('aaaaaa')).toBe(0);
    
    expect(checkTextValue('aaaaa/ ? , 1110022')).toBe(0);    
  
  });