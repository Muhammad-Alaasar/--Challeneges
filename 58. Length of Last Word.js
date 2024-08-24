/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    strArr = s.trim().split(' ');
    return strArr.at(-1).length;
};

console.log(
    lengthOfLastWord('Hello World'),
    lengthOfLastWord('   fly me   to   the moon  '),
    lengthOfLastWord('luffy is still joyboy')
    // lengthOfLastWord(),
    // lengthOfLastWord(),
    // lengthOfLastWord(),
    // lengthOfLastWord()
);
