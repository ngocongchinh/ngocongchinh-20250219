export interface ITrendingCoinItemData {
  price: number;
  total_volume: number;
  sparkline: string;
}

export interface ITrendingCoin {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
  data: ITrendingCoinItemData;
}

export interface ITrendingCoinItem {
  item: ITrendingCoin;
}

export interface ITrendingSearchData {
  coins: ITrendingCoinItem[];
  exchanges: any[];
}
