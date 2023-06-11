import { TokenService } from '../token/token.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { ChainService } from './chain.service'
import { ChainController } from './chain.controller'
import Chain from '../../entities/chain'
import Token from '../../entities/token'

@Module({
  imports: [TypeOrmModule.forFeature([Chain, Token])],
  controllers: [ChainController],
  providers: [ChainService, TokenService]
})
export class ChainModule {}
