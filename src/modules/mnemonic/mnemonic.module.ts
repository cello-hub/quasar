import { ChainService } from './../chain/chain.service'
import Mnemonic from '../../entities/mnemonic'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { MnemonicService } from './mnemonic.service'
import { MnemonicController } from './mnemonic.controller'
import Chain from '../../entities/chain'
import { WalletService } from '../wallet/wallet.service'
import Wallet from '../../entities/wallet'

@Module({
  imports: [TypeOrmModule.forFeature([Mnemonic, Chain, Wallet])],
  controllers: [MnemonicController],
  providers: [MnemonicService, ChainService, WalletService]
})
export class MnemonicModule {}
