/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { getQueryUrl } from 'src/utils/coingekco';
import serialize from 'src/utils/serialize';
// import trendingData from 'src/dummy/trending.json';
// import globalData from 'src/dummy/global.json';
// import marketData from 'src/dummy/market.json';
// import gainerData from 'src/dummy/gainer.json';
// import searchData from 'src/dummy/search.json';
// import coinDetailData from 'src/dummy/coin_detail.json';
// import coinPriceChartData from 'src/dummy/price_chart.json';
// import coinPriceChartRangeData from 'src/dummy/price_chart_range.json';
// import coinOhlcData from 'src/dummy/coin_ohlc.json';
// import coinOhlcByRange from 'src/dummy/coin_ohlc_range.json';

@Injectable()
export class CryptoService {
  private readonly apiUrl: string;

  constructor(private readonly httpService: HttpService) {}

  async searchCoins(query: string) {
    const url = getQueryUrl(`/search?query=${query}`);
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
      // return searchData;
    } catch (error) {
      return error;
    }
  }

  async getMarketCoins(query: Record<string, string>) {
    const queryStr = serialize(query);
    const url = getQueryUrl(`/coins/markets?${queryStr}`);
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
      // return marketData;
    } catch (error) {
      return error;
    }
  }

  async getTopGainerCoins(query: Record<string, string>) {
    const queryStr = serialize(query);
    const url = getQueryUrl(`/coins/top_gainers_losers?${queryStr}`);
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
      // return gainerData;
    } catch (error) {
      return error;
    }
  }

  async getTrendingCoins() {
    const url = getQueryUrl('/search/trending');
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
      // return trendingData;
    } catch (error) {
      return error;
    }
  }

  async getGlobalCoins() {
    const url = getQueryUrl('/global');
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
      // return globalData;
    } catch (error) {
      return error;
    }
  }

  async getCoinDetail(coinId: string) {
    const url = getQueryUrl(`/coins/${coinId}`);
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
      // return coinDetailData;
    } catch (error) {
      return error;
    }
  }

  async getCoinMarketChart(coinId: string, query: Record<string, string>) {
    const queryStr = serialize(query);
    const url = getQueryUrl(`/coins/${coinId}/market_chart?${queryStr}`);
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
      // return coinPriceChartData;
    } catch (error) {
      return error;
    }
  }

  async getOhlc(coinId: string, query: Record<string, string>) {
    const queryStr = serialize(query);
    const url = getQueryUrl(`/coins/${coinId}/ohlc?${queryStr}`);
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
      // return coinOhlcData;
    } catch (error) {
      return error;
    }
  }
}
