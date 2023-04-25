import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { WalletService } from './wallet.service'
import { WalletController } from './wallet.controller'
import { Wallet } from '../entities/wallet'

@Module({
  imports: [TypeOrmModule.forFeature([Wallet])],
  controllers: [WalletController],
  providers: [WalletService]
})
export class WalletModule {}
