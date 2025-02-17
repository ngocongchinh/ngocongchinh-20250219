import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { CryptoModule } from './modules/crypto/crypto.module';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule, CryptoModule],
})
export class AppModule {}
