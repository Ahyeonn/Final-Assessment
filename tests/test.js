const phoneNumber = require('../src/index');

const strPhone = phoneNumber('1234567890');
const intPhone = phoneNumber(1234567890);
const invalidNumber = phoneNumber('12345678901');

// eslint-disable-next-line no-undef
test('phoneNumber', () => {
  // eslint-disable-next-line no-undef
  expect(strPhone).toBe('(123) 456-7890');
  // eslint-disable-next-line no-undef
  expect(intPhone).toBe('(123) 456-7890');
  // eslint-disable-next-line no-undef
  expect(invalidNumber).toBe('This is invalid phone number. The number should be 10 digit numbers.');
});
