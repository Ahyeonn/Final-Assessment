const phoneNumber = require('../src/index')

const strPhone = phoneNumber('1234567890')
const intPhone = phoneNumber(1234567890)
const invalidNumber = phoneNumber('12345678901')

test('phoneNumber', () => {
    expect(strPhone).toBe('(123) 456-7890')
    expect(intPhone).toBe('(123) 456-7890')
    expect(invalidNumber).toBe('This is invalid phone number. The number should be 10 digit numbers.')
})