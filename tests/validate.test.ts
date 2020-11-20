import errorMessages from '../src/error-messages';
import { validateNric } from '../src/index';

test.each([
  ['S0000006Z'], //
  ['s0000007h'],
  ['F6143655M'],
])('Valid NRICs', (nric) => {
  expect(validateNric(nric)).toBe(true);
});

test.each([
  ['1242', errorMessages.NRIC_9_CHARACTERS],
  ['123456789', errorMessages.NRIC_FIRST_CHAR_INVALID],
  ['12345678F', errorMessages.NRIC_FIRST_CHAR_INVALID],
  ['S23456782', errorMessages.NRIC_LAST_CHAR_INVALID],
  ['T1234567O', errorMessages.NRIC_LAST_CHAR_INVALID], // last char is the letter "O"
  ['S6428912Z', errorMessages.NRIC_INVALID],
])('Invalid NRICs', (nric, message) => {
  expect(() => {
    validateNric(nric);
  }).toThrow(message);
});
