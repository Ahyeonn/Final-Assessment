function phoneNumber(strnum) {
  const listNums = strnum.toString().split('');
  if (listNums.length > 10) {
    return 'This is invalid phone number. The number should be 10 digit numbers.';
  }
  const firstThree = listNums.slice(0, 3).join('');
  const restFour = listNums.slice(3, 6).join('');
  const lastFour = listNums.slice(6, 10).join('');

  return `(${firstThree}) ${restFour}-${lastFour}`;
}

// const result = phoneNumber(1234567890)
// console.log(result)

module.exports = phoneNumber;
