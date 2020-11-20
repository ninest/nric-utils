import { validateNric } from '../src/index';

test('S0000006Z is valid', () => {
  expect(validateNric('S0000006Z')).toBe(true);
});

test('s0000007h is valid', () => {
  expect(validateNric('s0000007h')).toBe(true);
});

test('F6143655M is valid', () => {
  expect(validateNric('F6143655M')).toBe(true);
});
