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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoController = void 0;
const common_1 = require("@nestjs/common");
const crypto_service_1 = require("./crypto.service");
let CryptoController = class CryptoController {
    constructor(cryptoService) {
        this.cryptoService = cryptoService;
    }
    searchCoins(query) {
        return this.cryptoService.searchCoins(query);
    }
    getMarket(query) {
        return this.cryptoService.getMarketCoins(query);
    }
    getTopGainer(query) {
        return this.cryptoService.getTopGainerCoins(query);
    }
    getGlobalCoins() {
        return this.cryptoService.getGlobalCoins();
    }
    getTrendingCoins() {
        return this.cryptoService.getTrendingCoins();
    }
    getCoinDetail(coinId) {
        return this.cryptoService.getCoinDetail(coinId);
    }
    getCoinChart(coinId, query) {
        return this.cryptoService.getCoinMarketChart(coinId, query);
    }
    getOhlc(coinId, query) {
        return this.cryptoService.getOhlc(coinId, query);
    }
};
exports.CryptoController = CryptoController;
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "searchCoins", null);
__decorate([
    (0, common_1.Get)('market'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "getMarket", null);
__decorate([
    (0, common_1.Get)('top-gainer'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "getTopGainer", null);
__decorate([
    (0, common_1.Get)('global'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "getGlobalCoins", null);
__decorate([
    (0, common_1.Get)('trending'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "getTrendingCoins", null);
__decorate([
    (0, common_1.Get)('coin/:coinId'),
    __param(0, (0, common_1.Param)('coinId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "getCoinDetail", null);
__decorate([
    (0, common_1.Get)('market-chart/:coinId'),
    __param(0, (0, common_1.Param)('coinId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "getCoinChart", null);
__decorate([
    (0, common_1.Get)('ohlc/:coinId'),
    __param(0, (0, common_1.Param)('coinId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "getOhlc", null);
exports.CryptoController = CryptoController = __decorate([
    (0, common_1.Controller)('crypto'),
    __metadata("design:paramtypes", [crypto_service_1.CryptoService])
], CryptoController);
//# sourceMappingURL=crypto.controller.js.map