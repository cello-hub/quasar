import { ChainService } from './../chain/chain.service'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import Mnemonic from '../../entities/mnemonic'
import { CreateMnemonicDto } from './dto/create-mnemonic.dto'
import { UpdateMnemonicDto } from './dto/update-mnemonic.dto'
import { Repository } from 'typeorm'
import { ethers } from 'ethers'

@Injectable()
export class MnemonicService {
  constructor(
    @InjectRepository(Mnemonic)
    private readonly repository: Repository<Mnemonic>,
    private readonly chainService: ChainService
  ) {}

  async create(createMnemonicDto: CreateMnemonicDto) {
    const { phrase } = createMnemonicDto

    const mnemonic = new Mnemonic()
    if (phrase) {
      mnemonic.phrase = phrase
    } else {
      mnemonic.phrase = ethers.HDNodeWallet.createRandom().mnemonic.phrase
    }

    mnemonic.chain = await this.chainService.findOne(createMnemonicDto.chain_id)

    return this.repository.save(mnemonic)
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} mnemonic`
  }

  update(id: number, updateMnemonicDto: UpdateMnemonicDto) {
    return `This action updates a #${id} mnemonic`
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
