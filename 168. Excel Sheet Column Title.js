/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    // const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // if (columnNumber <= 26) {
    //     return chars.at(columnNumber - 1);
    // } else {
    //     const num = Math.floor(columnNumber / 26);
    //     const remain = columnNumber % 26;
    //     return chars.at(num - 1) + chars.at(remain - 1);
    // }
    let result = '',
        charCode = 'A'.charCodeAt(0);

    while (columnNumber > 0) {
        columnNumber--;
        const remainder = columnNumber % 26;
        result = String.fromCharCode(remainder + charCode) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
};

console.log(
    convertToTitle(1),
    convertToTitle(28),
    convertToTitle(701),
    convertToTitle(52),
    convertToTitle(260),
    convertToTitle(173),
    convertToTitle(2147483647) //"FXSHRXW"
    // convertToTitle(),
    // convertToTitle(),
    // convertToTitle(),
    // convertToTitle(),
    // convertToTitle(),
    // convertToTitle(),
    // convertToTitle(),
    // convertToTitle(),
);
