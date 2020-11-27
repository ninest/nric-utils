import errorMessages from '../src/error-messages';
import { validateMaskedNric } from '../src/index';

test.each([
  ['006z'], //
  ['007h'],
  ['655M'],
])('Masked NRIC %p is valid', (maskedNric) => {
  expect(validateMaskedNric(maskedNric)).toBe(true);
});

/* 
Masked NRIC with first letter
*/
test.each([
  ['s006z'], //
  ['S007h'],
  ['f655M'],
  ['S123A'],
])('Masked NRIC with 1st letter %p is valid', (maskedNric) => {
  expect(validateMaskedNric(maskedNric, true)).toBe(true);
});

/*
Invalid masked NRICs
*/
test.each([
  ['0000', false, errorMessages.NRIC_LAST_CHAR_INVALID],
  ['9999', false, errorMessages.NRIC_LAST_CHAR_INVALID],
  ['123O', false, errorMessages.NRIC_LAST_CHAR_INVALID],
  ['123', false, errorMessages.MASKED_NRIC_4_CHARACTERS],

  // with first letter
  ['123A', true, errorMessages.MASKED_NRIC_5_CHARACTERS],
  ['1123A', true, errorMessages.NRIC_FIRST_CHAR_INVALID],
  ['1123A', true, errorMessages.NRIC_FIRST_CHAR_INVALID],
  ['A123A', true, errorMessages.NRIC_FIRST_CHAR_INVALID],
  // ['f655M'],
])('Masked NRIC %p is invalid', (maskedNric, firstLetter, message) => {
  console.log(message);
  expect(() => {
    validateMaskedNric(maskedNric, firstLetter);
  }).toThrowError(message);
});
