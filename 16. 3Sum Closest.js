/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    const sortedArr = nums.toSorted((a, b) => a - b);
    console.log(sortedArr);
    
};

console.log(
    threeSumClosest([-1, 2, 1, -4], 1),
    threeSumClosest([0, 0, 0], 1)
    // threeSumClosest([-1, 2, 1, -4], 1),
    // threeSumClosest([-1, 2, 1, -4], 1),
    // threeSumClosest([-1, 2, 1, -4], 1),
    // threeSumClosest([-1, 2, 1, -4], 1),
    // threeSumClosest([-1, 2, 1, -4], 1),
    // threeSumClosest([-1, 2, 1, -4], 1),
    // threeSumClosest([-1, 2, 1, -4], 1),
    // threeSumClosest([-1, 2, 1, -4], 1),
    // threeSumClosest([-1, 2, 1, -4], 1)
);
