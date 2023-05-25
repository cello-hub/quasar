import { Injectable } from '@nestjs/common'
import { CreateChainDto } from './dto/create-chain.dto'
import { UpdateChainDto } from './dto/update-chain.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import Chain from '../../entities/chain'

@Injectable()
export class ChainService {
  constructor(
    @InjectRepository(Chain)
    private readonly chainRepository: Repository<Chain>
  ) {}

  async create(createChainDto: CreateChainDto) {
    const chain = new Chain()
    chain.topic = createChainDto.topic
    chain.chain_id = createChainDto.chain_id
    chain.hex_chain_id = createChainDto.hex_chain_id
    chain.symbol = createChainDto.symbol
    chain.explorer = createChainDto.explorer

    return await this.chainRepository.save(chain)
  }

  findAll() {
    return this.chainRepository.find()
  }

  findOne(id: number) {
    return this.chainRepository.findOneBy({ id })
  }

  findOneByChainId(chain_id: number) {
    return this.chainRepository.findOneBy({
      chain_id
    })
  }

  update(id: number, updateChainDto: UpdateChainDto) {
    return `This action updates a #${id} chain`
  }

  remove(id: number) {
    return `This action removes a #${id} chain`
  }
}
