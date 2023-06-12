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
    mnemonic.remark = createMnemonicDto.remark

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

  remove(id: number) {
    return this.repository.delete(id)
  }

  findOneByCondition(condition) {
    if (condition.chainId) {
      const { chainId, ...rest } = condition
      console.log(chainId)

      return this.repository
        .createQueryBuilder('mnemonic')
        .leftJoinAndSelect('mnemonic.chain', 'chain')
        .where('chain.id=:chainId', { chainId: chainId })
        .andWhere(rest)
        .getOne()
    }
    return this.repository.findOneBy(condition)
  }
}
