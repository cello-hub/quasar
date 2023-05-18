import { TypeOrmModule } from '@nestjs/typeorm'
import Ecosystem from '../../entities/ecosystem'
import { Module } from '@nestjs/common'
import { EcosystemService } from './ecosystem.service'
import { EcosystemController } from './ecosystem.controller'
import { ChainService } from '../chain/chain.service'
import Chain from '../../entities/chain'

@Module({
  imports: [TypeOrmModule.forFeature([Ecosystem, Chain])],
  controllers: [EcosystemController],
  providers: [EcosystemService, ChainService]
})
export class EcosystemModule {}
