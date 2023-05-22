import { ChainService } from './../chain/chain.service'
import Token from '../../entities/token'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateTokenDto } from './dto/create-token.dto'
import { UpdateTokenDto } from './dto/update-token.dto'

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

  update(id: number, dto: UpdateTokenDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return `This action removes a #${id} event`
  }
}
