var lengthOfLongestSubstring = function (s) {
    let result = '';
    let stringsLength = [''];

    for (let char = 0; char < s.length; char++) {
        let currentChar = s[char];
        let currentCharIndex = result.indexOf(currentChar);

        if (currentCharIndex === -1) result += s[char];
        else result = result.slice(currentCharIndex + 1) + s[char];

        stringsLength.push(result.slice(currentCharIndex + 1));
    }

    return Math.max(...stringsLength.map((str) => str.length));
};

console.log(
    lengthOfLongestSubstring('abcabcbb'),
    lengthOfLongestSubstring('bbbbb'),
    lengthOfLongestSubstring('pwwkew'),
    lengthOfLongestSubstring(''),
    lengthOfLongestSubstring(' '),
    lengthOfLongestSubstring('dvdf')
);
