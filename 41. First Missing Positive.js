/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const numSet = new Set(nums);

    for (let i = 0; i <= nums.length; i++) {
        if (!numSet.has(i + 1)) {
            return i + 1;
        }
    }
};

console.log(
    firstMissingPositive([1, 2, 0]),
    firstMissingPositive([3, 4, -1, 1]),
    firstMissingPositive([7, 8, 9, 11, 12])
    // firstMissingPositive([1,2,0]),
    // firstMissingPositive([1,2,0]),
    // firstMissingPositive([1,2,0]),
    // firstMissingPositive([1,2,0]),
    // firstMissingPositive([1,2,0]),
    // firstMissingPositive([1,2,0]),
);
