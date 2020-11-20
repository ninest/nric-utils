import { maskNric } from '../src/index';

test.each([
  ['S0000002G', '002G', false],
  ['s0000007h', '007H', false],
  ['S0000002G', 'S002G', true],
  ['s0000007h', 'S007H', true],
])('Validating NRICs', (nric, maskedNric, firstLetter) => {
  expect(maskNric(nric, firstLetter)).toBe(maskedNric);
});
