import Wallet from '../../entities/wallet'
import { Injectable } from '@nestjs/common'
import { UpdateWalletDto } from './dto/update-wallet.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ethers } from 'ethers'
import { encrypt } from '../../utils/AESEncrypt'
import { ChainService } from '../chain/chain.service'

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private readonly repository: Repository<Wallet>,
    private readonly chainService: ChainService
  ) {}

  async create() {
    const randomWallet = ethers.Wallet.createRandom()
    const wallet = new Wallet()
    wallet.address = randomWallet.address
    wallet.secret = encrypt(randomWallet.privateKey)

    const chain = await this.chainService.findOne(1)
    wallet.chain = chain

    const savedWallet = await this.repository.save(wallet)

    savedWallet.alias = `wallet_${savedWallet.id}`
    return await this.repository.save(savedWallet)
  }

  async updateBalance(address: string, balance: string) {
    const wallet = await this.repository.findOneBy({ address })
    wallet.amount = balance
    return await this.repository.save(wallet)
  }

  findAll() {
    return this.repository.find({
      order: {
        created_at: 'DESC'
      },
      relations: ['chain']
    })
  }

  findOneById(id: number) {
    return this.repository.findOneBy({ id })
  }

  findOneByAddress(address: string) {
    return this.repository.findOneBy({ address })
  }

  updateById(id: number, updateWalletDto: UpdateWalletDto) {
    return this.repository.update(id, updateWalletDto)
  }

  remove(id: number) {
    return `This action removes a #${id} account`
  }
}
