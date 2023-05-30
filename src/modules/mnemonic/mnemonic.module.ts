import { ChainService } from './../chain/chain.service'
import Mnemonic from '../../entities/mnemonic'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { MnemonicService } from './mnemonic.service'
import { MnemonicController } from './mnemonic.controller'
import Chain from '../../entities/chain'

@Module({
  imports: [TypeOrmModule.forFeature([Mnemonic, Chain])],
  controllers: [MnemonicController],
  providers: [MnemonicService, ChainService]
})
export class MnemonicModule {}
