import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { RpcNodeService } from './rpc-node.service'
import { RpcNodeController } from './rpc-node.controller'
import RpcNode from '../../entities/rpc-node'
import Chain from '../../entities/chain'
import { ChainService } from '../chain/chain.service'

@Module({
  imports: [TypeOrmModule.forFeature([RpcNode, Chain])],
  controllers: [RpcNodeController],
  providers: [RpcNodeService, ChainService]
})
export class RpcNodeModule {}
