/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let num = parseInt(s);
    if (isNaN(num)) {
        return 0;
    }
    if (num > -(2 ** 31) && num < 2 ** 31 - 1) {
        return num;
    } else {
        return num > 0 ? 2 ** 31 - 1 : -(2 ** 31);
    }
};

console.log(myAtoi('42'), myAtoi(' -042'), myAtoi('1337c0d3'), myAtoi('0-1'), myAtoi('-91283472332'), myAtoi('words and 987'));
