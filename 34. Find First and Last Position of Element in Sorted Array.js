/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const firstIndex = nums.indexOf(target),
        lastIndex = nums.lastIndexOf(target);
    return [firstIndex, lastIndex];
};

console.log(
    searchRange([5, 7, 7, 8, 8, 10], 8),
    searchRange([5, 7, 7, 8, 8, 10], 6),
    searchRange([], 0)
    // searchRange(),
    // searchRange(),
    // searchRange(),
    // searchRange(),
);
