/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // if (!newPricesArr.length) return 0;
    // const maxPrice = Math.max(...newPricesArr);
    // console.log(prices, newPricesArr, minPriceIndex, minPrice, maxPrice);

    // return maxPrice > minPrice ? maxPrice - minPrice : 0;

    // let minPrice = Math.min(...prices),
    //     minPriceIndex = prices.indexOf(minPrice),
    //     newPricesArr = prices.slice(minPriceIndex + 1);

    // while (newPricesArr.length == 0) {
    //     prices.splice(minPriceIndex, 1);
    // }
    let maxProfit = 0,
        currentEl = Infinity;

    // for (let i = 0; i < prices.length; i++) {
    //     if (prices[i] < prices[i + 1] && maxProfit <= prices[i + 1] - prices[i] && currentEl > prices[i]) {
    //         currentEl = prices[i];
    //         maxProfit = prices[i + 1] - prices[i];
    //     } else if (maxProfit < prices[i] - currentEl) {
    //         maxProfit = prices[i] - currentEl;
    //     }
    // }
    // return maxProfit;

    let i = 0;
    while (i < prices.length) {
        // while (maxProfit > prices[i + 1] - prices[i] && i < prices.length) {
        //     i++
        // }

        if ( currentEl > prices[i]) {
            currentEl = prices[i];
        } else if (maxProfit < prices[i] - currentEl) {
            maxProfit = prices[i] - currentEl;
        }

        i++;
    }
    return maxProfit
};

console.log(
    maxProfit([7, 1, 5, 3, 6, 4]),
    maxProfit([7, 6, 4, 3, 1]),
    maxProfit([2, 4, 1]),
    maxProfit([2, 1, 2, 1, 0, 1, 2]),
    maxProfit([1, 2, 4]),
    maxProfit([2, 7, 1, 4, 11]),
    maxProfit([3, 2, 6, 5, 0, 3])
    // maxProfit(),
    // maxProfit(),
    // maxProfit(),
    // maxProfit(),
    // maxProfit(),
    // maxProfit(),
    // maxProfit(),
);
