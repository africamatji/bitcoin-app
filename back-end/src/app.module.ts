import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BitCoinModule } from "./bitcoin/bitcoin.module";

@Module({
  imports: [BitCoinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
