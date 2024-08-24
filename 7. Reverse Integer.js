/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const stringNum = x.toString();
    const arr = stringNum.split('');
    const reverseArr = arr.reverse();
    const reversedNum = parseInt(reverseArr.join(''));
    if (2 ** 31 - 1 <= reversedNum) return 0;
    return x < 0 ? -reversedNum : reversedNum;
};

console.log(reverse(123), reverse(-123), reverse(120), reverse(1534236469));
