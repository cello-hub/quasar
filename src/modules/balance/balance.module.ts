import Chain from '../../entities/chain'
import { Module } from '@nestjs/common'
import { BalanceService } from './balance.service'
import { BalanceController } from './balance.controller'
import Balance from '../../entities/balance'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ChainService } from '../chain/chain.service'
import Token from '../../entities/token'
import { TokenService } from '../token/token.service'

@Module({
  imports: [TypeOrmModule.forFeature([Balance, Chain, Token])],
  controllers: [BalanceController],
  providers: [BalanceService, ChainService, TokenService]
})
export class BalanceModule {}
