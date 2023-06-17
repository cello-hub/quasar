import { ChainService } from './../chain/chain.service'
import Token from '../../entities/token'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateTokenDto } from './dto/create-token.dto'
import { UpdateTokenDto } from './dto/update-token.dto'
import { omit } from 'lodash'

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private readonly repository: Repository<Token>,
    private readonly chainService: ChainService
  ) {}

  findAll() {
    return this.repository.find({
      relations: ['chain']
    })
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id })
  }

  async create(dto: CreateTokenDto) {
    const token = new Token()
    token.name = dto.name
    token.symbol = dto.symbol
    token.decimal = dto.decimal || 1
    token.type = dto.type
    token.address = dto.address
    token.chain = await this.chainService.findOne(dto.chain_id)

    return this.repository.save(token)
  }

  async update(id: number, dto: UpdateTokenDto) {
    const chain = await this.chainService.findOne(dto.chain_id)
    return this.repository.update(id, {
      ...omit(dto, ['chain_id']),
      chain
    })
  }

  remove(id: number) {
    return `This action removes a #${id} event`
  }

  findOneBy(condition: Partial<Token>) {
    return this.repository
      .createQueryBuilder('token')
      .leftJoinAndSelect('token.chain', 'chain')
      .where('chain.id=:id', { id: condition.chain.id })
      .andWhere({
        ...condition
      })
      .getOne()
  }
}
