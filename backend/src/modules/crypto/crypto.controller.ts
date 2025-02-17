import { Controller, Get, Query, Param } from '@nestjs/common';
import { CryptoService } from './crypto.service';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Get('search')
  searchCoins(@Query('query') query: string) {
    return this.cryptoService.searchCoins(query);
  }

  @Get('market')
  getMarket(@Query() query: Record<string, string>) {
    return this.cryptoService.getMarketCoins(query);
  }

  @Get('top-gainer')
  getTopGainer(@Query() query: Record<string, string>) {
    return this.cryptoService.getTopGainerCoins(query);
  }

  @Get('global')
  getGlobalCoins() {
    return this.cryptoService.getGlobalCoins();
  }

  @Get('trending')
  getTrendingCoins() {
    return this.cryptoService.getTrendingCoins();
  }

  @Get('coin/:coinId')
  getCoinDetail(@Param('coinId') coinId: string) {
    return this.cryptoService.getCoinDetail(coinId);
  }

  @Get('market-chart/:coinId')
  getCoinChart(
    @Param('coinId') coinId: string,
    @Query() query: Record<string, string>,
  ) {
    return this.cryptoService.getCoinMarketChart(coinId, query);
  }

  @Get('ohlc/:coinId')
  getOhlc(
    @Param('coinId') coinId: string,
    @Query() query: Record<string, string>,
  ) {
    return this.cryptoService.getOhlc(coinId, query);
  }
}
