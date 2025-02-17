export function getQueryUrl(queryString: string): string {
  if (!queryString) return '';
  return `${process.env.COINGECKO_API_URL}${queryString}${queryString.includes('?') ? '&' : '?'}${process.env.COINGECKO_API_KEY}=${process.env.COINGECKO_API_KEY_VALUE}`;
}
