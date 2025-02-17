"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const coingekco_1 = require("../../utils/coingekco");
const serialize_1 = __importDefault(require("../../utils/serialize"));
let CryptoService = class CryptoService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async searchCoins(query) {
        const url = (0, coingekco_1.getQueryUrl)(`/search?query=${query}`);
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async getMarketCoins(query) {
        const queryStr = (0, serialize_1.default)(query);
        const url = (0, coingekco_1.getQueryUrl)(`/coins/markets?${queryStr}`);
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async getTopGainerCoins(query) {
        const queryStr = (0, serialize_1.default)(query);
        const url = (0, coingekco_1.getQueryUrl)(`/coins/top_gainers_losers?${queryStr}`);
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async getTrendingCoins() {
        const url = (0, coingekco_1.getQueryUrl)('/search/trending');
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async getGlobalCoins() {
        const url = (0, coingekco_1.getQueryUrl)('/global');
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async getCoinDetail(coinId) {
        const url = (0, coingekco_1.getQueryUrl)(`/coins/${coinId}`);
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async getCoinMarketChart(coinId, query) {
        const queryStr = (0, serialize_1.default)(query);
        const url = (0, coingekco_1.getQueryUrl)(`/coins/${coinId}/market_chart?${queryStr}`);
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async getOhlc(coinId, query) {
        const queryStr = (0, serialize_1.default)(query);
        const url = (0, coingekco_1.getQueryUrl)(`/coins/${coinId}/ohlc?${queryStr}`);
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
};
exports.CryptoService = CryptoService;
exports.CryptoService = CryptoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CryptoService);
//# sourceMappingURL=crypto.service.js.map