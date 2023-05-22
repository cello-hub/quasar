import { Module } from '@nestjs/common'
import { TokenService } from './token.service'
import { TokenController } from './token.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import Token from '../../entities/token'
import Chain from '../../entities/chain'
import { ChainService } from '../chain/chain.service'

@Module({
  imports: [TypeOrmModule.forFeature([Token, Chain])],
  controllers: [TokenController],
  providers: [TokenService, ChainService]
})
export class TokenModule {}
