import { Module } from '@nestjs/common'
import { TaskService } from './task.service'
import { TaskController } from './task.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import Task from '../../entities/task'
import Ecosystem from '../../entities/ecosystem'
import { EcosystemService } from '../ecosystem/ecosystem.service'
import Chain from '../../entities/chain'
import { ChainService } from '../chain/chain.service'

@Module({
  imports: [TypeOrmModule.forFeature([Task, Ecosystem, Chain])],
  controllers: [TaskController],
  providers: [TaskService, EcosystemService, ChainService]
})
export class TaskModule {}
