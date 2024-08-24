/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // First we want to convert that String into Decimal (number) for that i used BigInt.
    // It used to convert big integer values that are too big to be represented by a normal JavaScript Number,
    // inside of that BigInt i given a ('0b'+a) :- Here '0b' convert the a (function argument) into Decimal.
    const total = BigInt('0b' + a) + BigInt('0b' + b);
    return total.toString(2);
};

console.log(
    addBinary('11', '1'),
    addBinary('1010', '1011')
    // addBinary('11', '1'),
    // addBinary('11', '1'),
    // addBinary('11', '1'),
    // addBinary('11', '1'),
    // addBinary('11', '1'),
    // addBinary('11', '1'),
    // addBinary('11', '1'),
    // addBinary('11', '1'),
    // addBinary('11', '1'),
    // addBinary('11', '1')
);
