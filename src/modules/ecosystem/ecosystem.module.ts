import { TypeOrmModule } from '@nestjs/typeorm'
import Ecosystem from '../../entities/ecosystem'
import { Module } from '@nestjs/common'
import { EcosystemService } from './ecosystem.service'
import { EcosystemController } from './ecosystem.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Ecosystem])],
  controllers: [EcosystemController],
  providers: [EcosystemService]
})
export class EcosystemModule {}
