import { Injectable } from '@nestjs/common'
import { SaveChainDto } from './dto/save-chain.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import Chain from '../../entities/chain'

@Injectable()
export class ChainService {
  constructor(
    @InjectRepository(Chain)
    private readonly chainRepository: Repository<Chain>
  ) {}

  async save(saveChainDto: SaveChainDto) {
    const chainId = saveChainDto.chain_id || 0
    const hex_chain_id = `0x${Number(chainId).toString(16)}`

    if (saveChainDto.id) {
      return this.chainRepository.update(saveChainDto.id, {
        ...saveChainDto,
        hex_chain_id: hex_chain_id
      })
    } else {
      return this.chainRepository.save({
        ...saveChainDto,
        hex_chain_id: hex_chain_id
      })
    }
  }

  findAll() {
    return this.chainRepository.find()
  }

  findOne(id: number) {
    return this.chainRepository.findOneBy({ id: id })
  }

  async setRpc(chainId: number, url: string) {
    await this.chainRepository.update(chainId, {
      rpc_url: url
    })

    return {}
  }
}
