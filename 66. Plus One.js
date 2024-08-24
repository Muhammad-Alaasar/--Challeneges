/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // console.log(typeof digits.join(''));
    // const digitsArr = digits.join('');
    // digitsArr.at(-1) = digitsArr.at(-1)
    // console.log(digitsArr, digitsNum);

    // const arr = digitsNum
    //     .toString()
    //     .split('')
    //     .map((i) => +i);

    // return arr
    // Start from the last digit
    // for (let i = digits.length - 1; i >= 0; i--) {
    //     // Increment the current digit by 1
    //     digits[i] += 1;

    //     // If the digit becomes 10, we need to set it to 0 and carry over the 1 to the next digit
    //     if (digits[i] === 10) {
    //         digits[i] = 0;
    //     } else {
    //         // If no carry is needed, return the result immediately
    //         return digits;
    //     }
    // }

    // // If we've gone through all digits and still have a carry, prepend 1 to the array
    // digits.unshift(1);
    // return digits;

    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;

        if (digits[i] === 10) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};

console.log(
    plusOne([1, 2, 3]),
    plusOne([4, 3, 2, 1]),
    plusOne([9]),
    plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
    // plusOne(),
    // plusOne(),
    // plusOne(),
    // plusOne(),
    // plusOne(),
    // plusOne(),
    // plusOne(),
    // plusOne(),
    // plusOne()
);
