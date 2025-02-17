export interface IOhlcQuery {
  vs_currency: string;
  days: string;
}

export type IOhlcDataPoint = [number, number, number, number, number]; // [timestamp, open, high, low, close]

export type IOhlcData = IOhlcDataPoint[];
