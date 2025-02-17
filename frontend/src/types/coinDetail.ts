interface ICoinImage {
  thumb: string;
  small: string;
  large: string;
}

interface IMarketData {
  current_price: Record<string, number>;
  market_cap: Record<string, number>;
  total_volume: Record<string, number>;
  price_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
}

export interface ICoinDetail {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id: string | null;
  block_time_in_minutes: number;
  hashing_algorithm: string | null;
  categories: string[];
  description: Record<string, string>;
  market_cap_rank: number;
  image: ICoinImage;
  market_data: IMarketData;
  last_updated: string;
}
