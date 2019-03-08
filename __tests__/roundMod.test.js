"use strict";

import {roundMod} from '../services/roundMod';

test('проверка округления числа до 2-х знаков после запятой', () => {

  expect(roundMod(3.99954,100)).toBe(4.00);

  expect(roundMod(25.1578,100)).toBe(25.16);

  expect(roundMod(55.5555,100)).toBe(55.56);

});