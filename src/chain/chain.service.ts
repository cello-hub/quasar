import { Injectable } from '@nestjs/common'
import { CreateChainDto } from './dto/create-chain.dto'
import { UpdateChainDto } from './dto/update-chain.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Chain } from 'src/entities/chain'
import { Repository } from 'typeorm'

@Injectable()
export class ChainService {
  constructor(
    @InjectRepository(Chain)
    private readonly chainRepository: Repository<Chain>
  ) {}
  async create(createChainDto: CreateChainDto) {
    const chain = new Chain()
    chain.topic = createChainDto.topic
    chain.name = createChainDto.name
    chain.chain_id = createChainDto.chain_id
    chain.is_mainnet = createChainDto.is_mainnet
    chain.rpc_url = createChainDto.rpc_url

    return await this.chainRepository.save(chain)
  }

  findAll() {
    return this.chainRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} chain`
  }

  update(id: number, updateChainDto: UpdateChainDto) {
    return `This action updates a #${id} chain`
  }

  remove(id: number) {
    return `This action removes a #${id} chain`
  }
}
