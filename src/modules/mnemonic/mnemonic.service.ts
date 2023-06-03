import { ChainService } from './../chain/chain.service'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import Mnemonic from '../../entities/mnemonic'
import { CreateMnemonicDto } from './dto/create-mnemonic.dto'
import { UpdateMnemonicDto } from './dto/update-mnemonic.dto'
import { Repository } from 'typeorm'
import { ethers } from 'ethers'
import { decrypt, encrypt } from '../../utils/AESEncrypt'

@Injectable()
export class MnemonicService {
  constructor(
    @InjectRepository(Mnemonic)
    private readonly repository: Repository<Mnemonic>,
    private readonly chainService: ChainService
  ) {}

  async create(createMnemonicDto: CreateMnemonicDto) {
    const { phrase } = createMnemonicDto

    const chain = await this.chainService.findOne(createMnemonicDto.chain_id)

    const mnemonic = new Mnemonic()
    if (phrase) {
      mnemonic.phrase = encrypt(phrase)
    } else {
      mnemonic.phrase = encrypt(
        ethers.HDNodeWallet.createRandom().mnemonic.phrase
      )
    }
    mnemonic.chain = chain

    return this.repository.save(mnemonic)
  }

  findAll() {
    return this.repository
      .find({
        relations: ['chain']
      })
      .then((mnemonics) => {
        return mnemonics.map((mnemonic) => {
          mnemonic.phrase = decrypt(mnemonic.phrase)
          return mnemonic
        })
      })
  }

  findOneById(id: number) {
    return this.repository.findOne({
      where: {
        id
      },
      relations: ['chain']
    })
  }

  update(id: number, updateMnemonicDto: UpdateMnemonicDto) {
    return `This action updates a #${id} mnemonic`
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
