/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // let num;
    // for (let i = 0; i < nums.length; i++) {
        // if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i]) && -1 !== nums.lastIndexOf(nums[i])) {
        //     continue;
        // }
        // return nums[i];
    //     num = num ^ nums[i]
    // }
    // return num
    let singleNum;
    for (let num of nums) {
        singleNum ^= num;
    }
    return singleNum;
};

console.log(
    singleNumber([2, 2, 1]),
    singleNumber([4, 1, 2, 2, 1]),
    singleNumber([1])
    // singleNumber([1])
    // singleNumber([1])
    // singleNumber([1])
    // singleNumber([1])
    // singleNumber([1])
    // singleNumber([1])
    // singleNumber([1])
    // singleNumber([1])
    // singleNumber([1])
    // singleNumber([1])
);
