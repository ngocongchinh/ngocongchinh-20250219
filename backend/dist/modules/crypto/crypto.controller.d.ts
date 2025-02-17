import { CryptoService } from './crypto.service';
export declare class CryptoController {
    private readonly cryptoService;
    constructor(cryptoService: CryptoService);
    searchCoins(query: string): Promise<any>;
    getMarket(query: Record<string, string>): Promise<any>;
    getTopGainer(query: Record<string, string>): Promise<any>;
    getGlobalCoins(): Promise<any>;
    getTrendingCoins(): Promise<any>;
    getCoinDetail(coinId: string): Promise<any>;
    getCoinChart(coinId: string, query: Record<string, string>): Promise<any>;
    getOhlc(coinId: string, query: Record<string, string>): Promise<any>;
}
