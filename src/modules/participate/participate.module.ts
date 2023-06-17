import { TypeOrmModule } from '@nestjs/typeorm'
import Participate from '../../entities/participate'
import { Module } from '@nestjs/common'
import { ParticipateService } from './participate.service'
import { ParticipateController } from './participate.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Participate])],
  controllers: [ParticipateController],
  providers: [ParticipateService]
})
export class ParticipateModule {}
