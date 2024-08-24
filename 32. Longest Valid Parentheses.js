/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function (s) {
//     let arr = [];
//     let num = 0;
//     let obj = {
//         '}': '{',
//         ']': '{',
//         ')': '(',
//     };

//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];

//         if (obj[char] && arr.at(-1) == obj[char]) {
//             arr.pop();
//             if (obj[s[i + 1]] == arr[arr.length - 1] || !arr[arr.length + 1]) {
//                 num += 2;
//             } else {
//                 num = 2;
//             }
//         } else {
//             arr.push(char);
//             if (obj[s[i]] && s[i + 1]) num = 0;
//         }
//     }

//     return num;
// };

function longestValidParentheses(s) {
    let maxLength = 0;
    const stack = [-1];

    for (let i = 0; i < s.length; i++) {
        // if (s[i] === '(') {
        //     stack.push(i);
        // } else {
        //     stack.pop();
        //     if (stack.length === 0) {
        //         stack.push(i);
        //     } else {
        //         maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
        //     }
        // }

        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength;
}

console.log(
    longestValidParentheses('(()'), // 2
    longestValidParentheses(')()())'), // 4
    longestValidParentheses(''), // 0
    longestValidParentheses('()(()'), // 2
    longestValidParentheses('())'), // 2
    longestValidParentheses('()(())'), // 6
    longestValidParentheses('()()'), // 4
    longestValidParentheses(')()())()()(') // 4
);
