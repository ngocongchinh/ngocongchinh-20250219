import { HttpService } from '@nestjs/axios';
export declare class CryptoService {
    private readonly httpService;
    private readonly apiUrl;
    constructor(httpService: HttpService);
    searchCoins(query: string): Promise<any>;
    getMarketCoins(query: Record<string, string>): Promise<any>;
    getTopGainerCoins(query: Record<string, string>): Promise<any>;
    getTrendingCoins(): Promise<any>;
    getGlobalCoins(): Promise<any>;
    getCoinDetail(coinId: string): Promise<any>;
    getCoinMarketChart(coinId: string, query: Record<string, string>): Promise<any>;
    getOhlc(coinId: string, query: Record<string, string>): Promise<any>;
}
