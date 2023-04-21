import { Module } from "@nestjs/common";
import { BitCoinController } from "./bitcoin.controller";
import { BitCoinService } from "./bitcoin.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [ HttpModule ],
    controllers: [BitCoinController],
    providers: [BitCoinService]
})

export class BitCoinModule {}