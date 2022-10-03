"use strict";
exports.__esModule = true;
exports.phoneNumber = void 0;
function phoneNumber(strnum) {
    var listNums = strnum.toString().split('');
    if (listNums.length > 10) {
        return 'This is invalid phone number. The number should be 10 digit numbers.';
    }
    else {
        var firstThree = listNums.slice(0, 3).join('');
        var restFour = listNums.slice(3, 6).join('');
        var lastFour = listNums.slice(6, 10).join('');
        return '(' + firstThree + ') ' + restFour + '-' + lastFour;
    }
}
exports.phoneNumber = phoneNumber;
