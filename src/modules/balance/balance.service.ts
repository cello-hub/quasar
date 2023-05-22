import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import Balance from '../../entities/balance'

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(Balance)
    private readonly repository: Repository<Balance>
  ) {}

  findAll() {
    return this.repository.find({
      relations: ['wallet', 'token'],
      select: {
        wallet: {
          id: true,
          address: true,
          alias: true
        }
      }
    })
  }

  // 同步余额
  sync(address: string, chainId?: string, tokenId?: string) {
    return this.repository.findAndCount()
  }
}
