/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    // const arr = [];
    // if (n == 1) return ['()'];
    // for (let i = n; 1 < i; i--) {
    //     let el = '('.repeat(i) + ')'.repeat(i);
    //     let rel = '()'.repeat(i);
    //     i == n && arr.push(el, rel);
    //     let flag = false;
    //     let el2 = el;
    //     while (el.length / 2 < n || flag) {
    //         if (flag) {
    //             el = el2 + '()'.repeat(n - el2.length / 2);
    //             arr.push(el);
    //         } else {
    //             el = '()'.repeat(n - el2.length / 2) + el2;
    //             rel = '('.repeat(n - el2.length / 2) + rel + ')'.repeat(n - el2.length / 2);
    //             arr.push(el, rel);
    //         }
    //         flag = !flag;
    //     }
    //     el = rel = '';
    // }

    // return arr;

    // function backtrack(S = '', left = 0, right = 0) {
    //     if (S.length === 2 * n) {
    //         result.push(S);
    //         return;
    //     }
    //     if (left < n) {
    //         backtrack(S + '(', left + 1, right);
    //     }
    //     if (right < left) {
    //         backtrack(S + ')', left, right + 1);
    //     }
    // }

    // let result = [];
    // backtrack();
    // return result;

    const resultArr = [];
    (function recursionFN(result = '', left = 0, right = 0) {
        if (result.length === n * 2) {
            resultArr.push(result);
            return;
        }
        if (left < n) {
            recursionFN(result + '(', left + 1, right);
        }
        if (right < left) {
            recursionFN(result + ')', left, right + 1);
        }
    })();
    // recursionFN();
    return resultArr;
};

console.log(
    generateParenthesis(3),
    generateParenthesis(2),
    generateParenthesis(1),
    generateParenthesis(4),
    generateParenthesis(5)
    // generateParenthesis(3),
    // generateParenthesis(3),
    // generateParenthesis(3),
    // generateParenthesis(3),
    // generateParenthesis(3),
    // generateParenthesis(3),
);
