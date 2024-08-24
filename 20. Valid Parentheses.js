/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // return (
    //     s.indexOf('(') > -1 &&
    //     s[s.indexOf('(') + 1] === ')' &&
    //     s.indexOf('{') > -1 &&
    //     s[s.indexOf('{') + 1] === '}' &&
    //     s.indexOf('[') > -1 &&
    //     s[s.indexOf('[') + 1] === ']'
    // );

    // let firstChar = 0;
    // let length = s.length;
    // let bool = false;

    // let obj = {
    //     '{': '}',
    //     '[': ']',
    //     '(': ')',
    // };

    // while (firstChar >= 0 && length > 0 && s.indexOf(obj[s[firstChar]]) !== -1) {
    //     firstChar++;
    //     length--;
    //     bool = true;
    // }
    // return bool;

    // let obj = {
    //     '{': '}',
    //     '[': ']',
    //     '(': ')',
    // };

    // let bool = false;

    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] && obj[s[i]] === s[i + 1]) {
    //         bool = true;
    //     } else if (s[i] && s.indexOf(obj[s[i]]) !== -1) {
    //         if (s[i + 1] && obj[s[i + 1]] === s[i + 2]) {
    //             bool = true;
    //         } else {
    //             bool = false;
    //             break;
    //         }
    //     } else {
    //         bool = false;
    //         break;
    //     }
    // }
    // return bool;

    const stack = [];
    const matchingBrackets = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (matchingBrackets[char]) {
            if (stack.length == 0 || stack[stack.length - 1] !== matchingBrackets[char]) return false;
            else stack.pop();
        } else stack.push(char);
    }

    return stack.length === 0;
};

console.log(
    isValid('()'),
    isValid('()[]{}'),
    isValid('{[]}'),
    isValid('{[]}'),
    isValid('{[]}'),
    isValid('{[]}'),
    isValid('{[]}()'),
    isValid('(]'),
    isValid('(){}}{')
);
