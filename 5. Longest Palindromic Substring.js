/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//     let palindrome = [];
//     let result = '';

//     for (let char = 0; char < s.length; char++) {
//         result += s[char];

//         let reverseString = result.split('').reverse().join('');
//         if (result === reverseString) palindrome.push(result);
//         else {
//             // for (let i = 0; i < result.length; i++) {
//             let result2 = result.slice(char - 4);
//             let reverseString2 = result2.split('').reverse().join('');
//             if (result2 === reverseString2) palindrome.push(result2);
//             // }
//         }
//     }

//     return palindrome.toSorted((a, b) => b.length - a.length)[0];
// };


// var longestPalindrome = function (s) {
//     let longestPal = '';

//     for (let i = 0; i < s.length; i++) {
//         // Check for odd-length palindromes
//         let left = i, right = i;
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             if (right - left + 1 > longestPal.length) {
//                 longestPal = s.slice(left, right + 1);
//             }
//             left--;
//             right++;
//         }

//         // Check for even-length palindromes
//         left = i;
//         right = i + 1;
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             if (right - left + 1 > longestPal.length) {
//                 longestPal = s.slice(left, right + 1);
//             }
//             left--;
//             right++;
//         }
//     }

//     return longestPal;
// };


// console.log(
//     longestPalindrome('babad'),
//     longestPalindrome('cbbd'),
//     longestPalindrome(
//         'ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy'
//     )
//     // longestPalindrome(''),
//     // longestPalindrome(' '),
//     // longestPalindrome('dvdf')
// );

var longestPalindrome = function (s) {
    let maxLength = 0;
    let longest = '';

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes
        let oddPalindrome = expandAroundCenter(s, i, i);
        if (oddPalindrome.length > maxLength) {
            maxLength = oddPalindrome.length;
            longest = oddPalindrome;
        }

        // Check for even-length palindromes
        let evenPalindrome = expandAroundCenter(s, i, i + 1);
        if (evenPalindrome.length > maxLength) {
            maxLength = evenPalindrome.length;
            longest = evenPalindrome;
        }
    }

    return longest;
};

// Helper function to expand around the center
function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right);
}

console.log(
    longestPalindrome('babad'),
    longestPalindrome('cbbd'),
    longestPalindrome(
        'ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy'
    )
);
