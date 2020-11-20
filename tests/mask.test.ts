import { maskNric } from '../src/index';

test('S0000002G masks to 002G', () => {
  expect(maskNric('S0000002G')).toBe('002G');
});

test('s0000007h masks to 007H', () => {
  expect(maskNric('s0000007H')).toBe('007H');
});

test('S0000002G with first letter masks to S002G', () => {
  expect(maskNric('S0000002G', true)).toBe('S002G');
});
test('s0000007h with first letter masks to S007H', () => {
  expect(maskNric('s0000007H', true)).toBe('S007H');
});
