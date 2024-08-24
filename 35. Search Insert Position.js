/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let index = nums.indexOf(target);
    if (index !== -1) {
        return index;
    } else {
        if (nums[0] > target) return 0;
        if (nums.at(-1) < target) return nums.length;
        let n = 1;
        while (n) {
            if (nums.indexOf(target + n) >= 0) {
                index = nums.indexOf(target + n);
                n = 0;
            } else {
                n++;
            }
        }
    }
    return index;
};

console.log(
    searchInsert([1, 3, 5, 6], 5),
    searchInsert([1, 3, 5, 6], 2),
    searchInsert([1, 3, 5, 6], 7),
    searchInsert([1, 3, 5, 6], 0)
    // searchInsert(),
    // searchInsert(),
    // searchInsert(),
    // searchInsert(),
    // searchInsert()
);
