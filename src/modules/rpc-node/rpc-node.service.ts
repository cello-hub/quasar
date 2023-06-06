import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import RpcNode from '../../entities/rpc-node'
import { Repository } from 'typeorm'
import { SaveRpcNodeDto } from './dto/save-rpc-node.dto'
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

  async save(dto: SaveRpcNodeDto) {
    const { id, chainId, name, url } = dto

    if (id) {
      await this.repository.update(id, {
        name: name,
        rpc_url: url
      })
    } else {
      const node = new RpcNode()
      const chain = await this.chainService.findOne(chainId)
      node.chain = chain
      node.name = name || `${chain.topic}_rpc`
      node.rpc_url = url
      this.repository.save(node)
    }

    return {}
  }
}
