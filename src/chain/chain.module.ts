import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { ChainService } from './chain.service'
import { ChainController } from './chain.controller'
import { Chain } from 'src/entities/chain'

@Module({
  imports: [TypeOrmModule.forFeature([Chain])],
  controllers: [ChainController],
  providers: [ChainService]
})
export class ChainModule {}
