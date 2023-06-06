import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import RpcNode from '../../entities/rpc-node'
import { Repository } from 'typeorm'
import { CreateRpcNodeDto } from './dto/create-rpc-node.dto'
import { ChainService } from '../chain/chain.service'

@Injectable()
export class RpcNodeService {
  constructor(
    @InjectRepository(RpcNode)
    private readonly repository: Repository<RpcNode>,
    private readonly chainService: ChainService
  ) {}
  findByChainId(chainId: number) {
    return this.repository
      .createQueryBuilder('rpc_node')
      .leftJoinAndSelect('rpc_node.chain', 'chain')
      .where('chain.id=:id', { id: chainId })
      .getMany()
  }

  async create(dto: CreateRpcNodeDto) {
    console.log(dto)

    const { chainId, name, url } = dto

    const chain = await this.chainService.findOne(chainId)
    console.log(chain)

    const node = new RpcNode()
    node.chain = chain
    node.name = name
    node.rpc_url = url

    return this.repository.save(node)
  }
}
