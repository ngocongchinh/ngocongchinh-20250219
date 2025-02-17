export function formatNumber(value: number, decimals = 0): string {
  return value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const formatPrice = (price: number): string => {
  if (price >= 1) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (price >= 0.01) return price.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 });
  if (price >= 0.0001) return price.toLocaleString('en-US', { minimumFractionDigits: 6, maximumFractionDigits: 6 });
  if (price >= 0.000001) return price.toLocaleString('en-US', { minimumFractionDigits: 8, maximumFractionDigits: 8 });
  return price.toPrecision(10);
};

export function formatNumberShort(value: number, decimals = 2): string {
  if (value >= 1e12) return (value / 1e12).toFixed(decimals) + 'T'; // Trillions
  if (value >= 1e9) return (value / 1e9).toFixed(decimals) + 'B'; // Billions
  if (value >= 1e6) return (value / 1e6).toFixed(decimals) + 'M'; // Millions
  if (value >= 1e3) return (value / 1e3).toFixed(decimals) + 'K'; // Thousands
  if (value >= 1) return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (value >= 0.01) return value.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 });
  if (value >= 0.0001) return value.toLocaleString('en-US', { minimumFractionDigits: 6, maximumFractionDigits: 6 });
  if (value >= 0.000001) return value.toLocaleString('en-US', { minimumFractionDigits: 8, maximumFractionDigits: 8 });
  return value.toPrecision(10);
}
