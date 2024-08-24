/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    nums = nums.filter((i) => {
        if (i === val) {
            return false;
        } else {
            return true;
        }
    });
    return nums.length;
    // let changesNum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] == val) {
    //         nums.splice(i,1);
    //         --i;
    //     }
    // }

    // let k = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== val) {
    //         nums[k] = nums[i];
    //         k++;
    //     }
    // }
    // return k;

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] == val) {
    //         nums.splice(i, 1);
    //         i -= 1;
    //     }
    // }
    // console.log(nums);
};

console.log(
    removeElement([3, 2, 2, 3], 3),
    removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
    // removeElement('{[]}'),
    // removeElement('{[]}'),
    // removeElement('{[]}'),
    // removeElement('{[]}'),
    // removeElement('{[]}')
);
