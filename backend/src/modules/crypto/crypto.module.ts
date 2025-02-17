import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { CryptoService } from './crypto.service';
import { CryptoController } from './crypto.controller';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [CryptoController],
  providers: [CryptoService],
})
export class CryptoModule {}
