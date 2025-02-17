export interface IMarketChartQuery {
  vs_currency: string;
  days: string;
  interval?: 'minutely' | 'hourly' | 'daily';
}

export type IMarketDataPoint = [number, number];

export interface IMarketChartData {
  prices: IMarketDataPoint[];
  market_caps: IMarketDataPoint[];
  total_volumes: IMarketDataPoint[];
}
