/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const MAP = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    let numbersArr = [];

    for (let i = 0; i < digits.length; i++) {
        let numbersArrCopy = [...numbersArr];
        numbersArr = [];
        
        MAP[digits[i]].forEach((element) => {
            if (i == 0) {
                numbersArr.push(element);
            } else {
                numbersArrCopy.forEach((it) => {
                    numbersArr.push(it + element);
                });
            }
        });
    }

    return numbersArr;
};

console.log(
    letterCombinations('23'),
    letterCombinations(''),
    letterCombinations('2'),
    letterCombinations('234'),
    letterCombinations('2345'),
    letterCombinations('999').length, //["www","wwx","wwy","wwz","wxw","wxx","wxy","wxz","wyw","wyx","wyy","wyz","wzw","wzx","wzy","wzz","xww","xwx","xwy","xwz","xxw","xxx","xxy","xxz","xyw","xyx","xyy","xyz","xzw","xzx","xzy","xzz","yww","ywx","ywy","ywz","yxw","yxx","yxy","yxz","yyw","yyx","yyy","yyz","yzw","yzx","yzy","yzz","zww","zwx","zwy","zwz","zxw","zxx","zxy","zxz","zyw","zyx","zyy","zyz","zzw","zzx","zzy","zzz"]
    letterCombinations('67'),
    letterCombinations('67').length
    // letterCombinations(),
    // letterCombinations()
);
