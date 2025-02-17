export interface ISearchCoin {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank?: number;
  thumb: string;
  large: string;
}

export interface ISearchCoinData {
  coins: ISearchCoin[];
  exchanges: any;
  categories: any;
  nfts: any;
}
