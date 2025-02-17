"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMaxProfit = calculateMaxProfit;
function calculateMaxProfit(prices) {
    if (!prices || prices.length < 2)
        return 0;
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
}
//# sourceMappingURL=calculateMaxProfit.js.map