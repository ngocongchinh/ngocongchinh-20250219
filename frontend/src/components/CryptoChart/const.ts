import { TimeRange, ChartType } from 'types';

export const TIME_RANGES = [
  {
    name: '24h',
    value: TimeRange['1D'],
  },
  {
    name: '7D',
    value: TimeRange['7D'],
  },
  {
    name: '1M',
    value: TimeRange['1M'],
  },
  {
    name: '3M',
    value: TimeRange['3M'],
  },
  {
    name: '6M',
    value: TimeRange['6M'],
  },
  {
    name: '1Y',
    value: TimeRange['1Y'],
  },
];

export const CHART_TYPES = [
  {
    name: 'Price',
    value: ChartType.Price,
  },
  {
    name: 'OHLC',
    value: ChartType.OHLC,
  },
];
