import Token from '../../entities/token'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private readonly repository: Repository<Token>
  ) {}

  findAll() {
    return this.repository.find({
      relations: ['chain']
    })
  }
}
