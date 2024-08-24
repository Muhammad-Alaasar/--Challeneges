/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    // for (; divisor < dividend; dividend -= divisor) {
    //     if (divisor < 0) {

    //     } else {
    //         if (dividend - divisor > 0) {
    //             n++;
    //         } else {
    //             break;
    //         }
    //     }
    // }
    // return n;
    // let n = 0;
    // const nagitave = (divisor < 0) ^ (dividend < 0) ? -1 : 1;

    // divisor = Math.abs(divisor);
    // dividend = Math.abs(dividend);

    // while (divisor <= dividend) {
    //     if (dividend - divisor >= 0) {
    //         dividend -= divisor;
    //         n++;
    //     } else {
    //         break;
    //     }
    // }
    // return nagitave * n;
    const retIsNegative = Math.sign(divisor) !== Math.sign(dividend);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let ret = 0;
    while (divisor <= dividend) {
        let value = divisor;
        let multiple = 1;
        while (value + value <= dividend) {
            value += value;
            multiple += multiple;
        }
        dividend = dividend - value;
        ret += multiple;
    }

    if (ret > 2 ** 31 - 1) {
        return retIsNegative ? -(2 ** 31) : 2 ** 31 - 1;
    }
    return retIsNegative ? -ret : ret;
};

console.log(
    divide(10, 3),
    divide(20, 1),
    divide(7, -3),
    divide(1, 1),
    divide(-1, -1),
    divide(-1, 1),
    divide(-2147483648, -1), // 2147483647
    divide(-2147483648, 1) // 2147483647
    // divide('{[]}'),
    // divide('{[]}'),
    // divide('{[]}'),
    // divide('{[]}')
);
