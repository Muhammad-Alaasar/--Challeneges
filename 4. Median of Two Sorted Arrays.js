/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = mergedArray.length;
    if (mergedArray.length % 2 === 0) return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    else return mergedArray[Math.floor(length / 2)];
};

console.log(
    findMedianSortedArrays([1, 3], [2]),
    findMedianSortedArrays([1, 2], [3, 4])
    // findMedianSortedArrays('pwwkew'),
    // findMedianSortedArrays(''),
    // findMedianSortedArrays(' '),
    // findMedianSortedArrays('dvdf')
);
