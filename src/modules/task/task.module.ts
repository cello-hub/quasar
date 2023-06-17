import Participate from '../../entities/participate'
import { ClusterService } from './../cluster/cluster.service'
import { Module } from '@nestjs/common'
import { TaskService } from './task.service'
import { TaskController } from './task.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import Task from '../../entities/task'
import Ecosystem from '../../entities/ecosystem'
import { EcosystemService } from '../ecosystem/ecosystem.service'
import Chain from '../../entities/chain'
import { ChainService } from '../chain/chain.service'
import Cluster from '../../entities/cluster'
import { ParticipateService } from '../participate/participate.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, Ecosystem, Chain, Cluster, Participate])
  ],
  controllers: [TaskController],
  providers: [
    TaskService,
    EcosystemService,
    ChainService,
    ClusterService,
    ParticipateService
  ]
})
export class TaskModule {}
