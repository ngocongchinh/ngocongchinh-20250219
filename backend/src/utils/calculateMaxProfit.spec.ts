import { calculateMaxProfit } from './calculateMaxProfit';

describe('calculateMaxProfit', () => {
  it('should return the max profit', () => {
    expect(calculateMaxProfit([5, 1, 2, 3, 4])).toBe(3);
    expect(calculateMaxProfit([2, 3, 6, 4, 3])).toBe(4);
    expect(calculateMaxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  it('should return 0 if array is empty or less than 2 items', () => {
    expect(calculateMaxProfit([])).toBe(0);
    expect(calculateMaxProfit([1])).toBe(0);
  });
});
