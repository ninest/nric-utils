import { validateNric } from '../src/index';

test.each([
  ['S0000006Z', true],
  ['s0000007h', true],
  ['F6143655M', true],
  ['1242', false],
  ['12345672', false],
  ['S2345672', false],
  ['1234567F', false],
])('Validating NRICs', (nric, expected) => {
  expect(validateNric(nric)).toBe(expected);
});
