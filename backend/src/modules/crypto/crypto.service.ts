import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { getQueryUrl } from 'src/utils/coingekco';
import serialize from 'src/utils/serialize';

@Injectable()
export class CryptoService {
  constructor(private readonly httpService: HttpService) {}

  async searchCoins(query: string) {
    const url = getQueryUrl(`/search?query=${query}`);
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
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
    } catch (error) {
      return error;
    }
  }

  async getTrendingCoins() {
    const url = getQueryUrl('/search/trending');
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getGlobalCoins() {
    const url = getQueryUrl('/global');
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getCoinDetail(coinId: string) {
    const url = getQueryUrl(`/coins/${coinId}`);
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
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
    } catch (error) {
      return error;
    }
  }
}
