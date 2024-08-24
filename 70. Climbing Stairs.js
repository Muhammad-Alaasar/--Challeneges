/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let pos = 0;

    (function track(n) {
        if (3 >= n) {
            pos = n;
            return n;
        } else {
            pos = 2 * track(n - 2);
            pos += track(n - 3);
            return pos;
        }
    })(n);
    return pos;

    // return n <= 3 ? n : 2 * climbStairs(n - 2) + climbStairs(n - 3);

    // let pos = 0;

    // (function track(n) {
    //     if (0 == n) {
    //         pos++;
    //         return;
    //     }
    //     if (0 < n) {
    //         track(n - 1);
    //     }
    //     if (0 <= n - 2) {
    //         track(n - 2);
    //     }
    // })(n);
    // return pos;
};

console.log(
    climbStairs(2),
    climbStairs(3),
    climbStairs(4),
    climbStairs(44)
    // climbStairs(),
    // climbStairs(),
    // climbStairs(),
    // climbStairs(),
    // climbStairs(),
    // climbStairs(),
    // climbStairs(),
    // climbStairs(),
    // climbStairs(),
);
