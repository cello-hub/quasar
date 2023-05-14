import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { WalletService } from './wallet.service'
import { WalletController } from './wallet.controller'
import Wallet from '../../entities/wallet'
import { ChainService } from '../chain/chain.service'
import Chain from '../../entities/chain'

@Module({
  imports: [TypeOrmModule.forFeature([Wallet, Chain])],
  controllers: [WalletController],
  providers: [WalletService, ChainService]
})
export class WalletModule {}
