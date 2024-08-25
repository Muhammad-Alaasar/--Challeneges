/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    // let concatedStrings = [];
    // for (let word = 0; word < words.length; word++) {
    //     let concatedStrings1 = words.reduce((acc, curr, i) => {
    //         if (word >= i) return curr; //+ words[word];
    //         concatedStrings.push(acc + curr);
    //         return acc + curr;
    //     }, '');
    //     console.log(concatedStrings1);

    //     // words.shift();
    //     // --word;
    // }
    // return concatedStrings;

    // let indexs = [];

    // (function recursionFN(subArr, prefix = '') {
    //     if (subArr.length === 0) {
    //         let word = s,
    //             index = word.indexOf(prefix);
    //         while (index !== -1 && !indexs.includes(index)) {
    //             indexs.push(index);
    //             // word = word.replace(word[index], '#');
    //             index = word.indexOf(prefix, index + 1);
    //         }
    //     } else {
    //         for (let i = 0; i < subArr.length; i++) {
    //             let newSubArr = subArr.slice(0, i).concat(subArr.slice(i + 1));
    //             recursionFN(newSubArr, prefix + subArr[i]);
    //         }
    //     }
    // })(words);

    // // for (let i = 0; i < results.length; i++) {
    // //     // // console.log(s);
    // //     // const index = s.indexOf(results[i]);
    // //     // // // if (index !== -1 && !indexs.includes(index)) {
    // //     // // //     indexs.push(index);
    // //     // // // }
    // //     // while (index !== -1 && !indexs.includes(index)) {
    // //     //     indexs.push(index);
    // //     //     s = s.replace(s[index], '#');
    // //     //     i--;
    // //     // }

    // // }

    // return indexs;

    // const results = [];
    // words.sort();
    // let right = words.reduce((acc, curr) => (acc += curr.length), 0);

    // for (let i = 0; right < s.length + 1; i++, right++) {
    //     let subString = s.slice(i, right);
    //     let arr = subString.match(new RegExp(`.{1,${words[0].length}}`, 'g')).sort();
    //     if (JSON.stringify(arr) === JSON.stringify(words)) results.push(i);
    // }
    // return results;

    // const result = [];
    // let strLength = words.reduce((acc, curr) => (acc += curr.length), 0);
    // words.sort();

    // for (let i = 0; i < s.length; i++, strLength++) {
    //     const newStr = s.substring(i, strLength),
    //         newArr = newStr.match(new RegExp(`.{1,${words[0].length}}`, 'g')).sort();
    //     if (JSON.stringify(newArr) === JSON.stringify(words)) {
    //         result.push(i);
    //     }
    // }
    // return result;

    const result = [];
    const wordLength = words[0].length;
    const wordCount = words.length;
    const substringLength = wordLength * wordCount;

    // Create a map of the word frequencies
    const wordMap = {};
    words.forEach((word) => {
        wordMap[word] = (wordMap[word] || 0) + 1;
    });

    for (let i = 0; i <= s.length - substringLength; i++) {
        const seenWords = {};
        let j = 0;

        // Check substring of length `substringLength` starting from `i`
        while (j < wordCount) {
            const wordIndex = i + j * wordLength;
            const word = s.substring(wordIndex, wordIndex + wordLength);

            if (!wordMap[word]) {
                break;
            }

            seenWords[word] = (seenWords[word] || 0) + 1;

            if (seenWords[word] > wordMap[word]) {
                break;
            }

            j++;
        }

        if (j === wordCount) {
            result.push(i);
        }
    }

    return result;
};

console.log(
    findSubstring('barfoothefoobarman', ['foo', 'bar']),
    findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']),
    findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']),
    findSubstring('foobarfoobar', ['foo', 'bar']),
    findSubstring(
        'pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel',
        ['dhvf', 'sind', 'ffsl', 'yekr', 'zwzq', 'kpeo', 'cila', 'tfty', 'modg', 'ztjg', 'ybty', 'heqg', 'cpwo', 'gdcj', 'lnle', 'sefg', 'vimw', 'bxcb']
    )
    // findSubstring('barfoothefoobarman', ['foo', 'bar']),
    // findSubstring('barfoothefoobarman', ['foo', 'bar']),
    // findSubstring('barfoothefoobarman', ['foo', 'bar'])
);

// const strings = ["bar", "foo", "the"];

// function generateCombinations(arr) {
//   let results = [];

//   function permute(subArr, prefix = "") {
//     if (subArr.length === 0) {
//       results.push(prefix);
//     } else {
//       for (let i = 0; i < subArr.length; i++) {
//         let newSubArr = subArr.slice(0, i).concat(subArr.slice(i + 1));
//         permute(newSubArr, prefix + subArr[i]);
//       }
//     }
//   }

//   permute(arr);
//   return results;
// }

// const allCombinations = generateCombinations(strings);
// console.log(allCombinations);
