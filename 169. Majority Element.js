/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // const numsObj = nums.reduce((acc, curr, i) => {
    //     return {
    //         ...acc,
    //         [curr]: acc[curr] ? acc[curr] + 1 : 1,
    //     };
    // }, {});
    // let diplicatedNumber = Math.max(...Object.values(numsObj));

    // return Object.keys(numsObj).find((key) => numsObj[key] === diplicatedNumber);

    let result = 0,
        count = 0;

    for (let num of nums) {
        if (!count) result = num;

        if (num === result) count++;
        else count--;
    };
    return result;
};

console.log(
    majorityElement([3, 2, 3]),
    majorityElement([2, 2, 1, 1, 1, 2, 2])
    // majorityElement(),
    // majorityElement(),
    // majorityElement(),
    // majorityElement(),
    // majorityElement(),
    // majorityElement(),
    // majorityElement(),
    // majorityElement()
);
