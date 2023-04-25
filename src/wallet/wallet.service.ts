import { Wallet } from '../entities/wallet'
import { Injectable } from '@nestjs/common'
import { UpdateWalletDto } from './dto/update-wallet.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ethers } from 'ethers'
import { decrypt, encrypt } from 'src/utils/AESEncrypt'

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private readonly repository: Repository<Wallet>
  ) {}

  async create() {
    const randomWallet = ethers.Wallet.createRandom()
    const wallet = new Wallet()
    wallet.address = randomWallet.address
    wallet.pk = encrypt(randomWallet.privateKey)

    const savedWallet = await this.repository.save(wallet)

    savedWallet.alias = `wallet_${savedWallet.id}`
    return await this.repository.save(savedWallet)
  }

  async updateBalance(address: string, balance: string) {
    const wallet = await this.repository.findOneBy({ address })
    wallet.balance = balance
    return await this.repository.save(wallet)
  }

  findAll() {
    return this.repository.find({
      order: {
        created_at: 'DESC'
      }
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
