/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const newString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const charsArr = newString.split('');
    const reserseChars = charsArr.reverse();
    const palindrome = reserseChars.join('');
    return newString === palindrome;
};

console.log(
    isPalindrome('A man, a plan, a canal: Panama'),
    isPalindrome('race a car'),
    isPalindrome(' ')
    // isPalindrome(),
    // isPalindrome(),
    // isPalindrome(),
    // isPalindrome(),
    // isPalindrome(),
    // isPalindrome(),
    // isPalindrome(),
    // isPalindrome(),
    // isPalindrome(),
    // isPalindrome()
);
