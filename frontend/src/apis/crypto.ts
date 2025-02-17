import request from 'services/request';
import serialize from 'utils/serialize';
import { ICoinMarketQuery, IMarketChartQuery, IOhlcQuery } from 'types';

export const getTrendingCoinApi = () => request.get('/crypto/trending');

export const getGlobalApi = () => request.get('/crypto/global');

export const getCoinDetailApi = (id: string | string[]) => request.get(`/crypto/coin/${id}`);

export const searchCoinApi = (query: any) => {
  const queryStr = serialize(query);
  return request.get(`/crypto/search?${queryStr}`);
};

export const getMarketCoinApi = (query: ICoinMarketQuery) => {
  const queryStr = serialize(query);
  return request.get(`/crypto/market?${queryStr}`);
};

export const getCoinMarketChartApi = ({ id, query }: { id: string; query: IMarketChartQuery }) => {
  const queryStr = serialize(query);
  return request.get(`/crypto/market-chart/${id}?${queryStr}`);
};

export const getOhlcChartApi = ({ id, query }: { id: string; query: IOhlcQuery }) => {
  const queryStr = serialize(query);
  return request.get(`/crypto/ohlc/${id}?${queryStr}`);
};
