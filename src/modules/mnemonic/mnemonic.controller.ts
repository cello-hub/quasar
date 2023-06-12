import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { MnemonicService } from './mnemonic.service'
import { CreateMnemonicDto } from './dto/create-mnemonic.dto'
import { UpdateMnemonicDto } from './dto/update-mnemonic.dto'
import { WalletService } from '../wallet/wallet.service'
import { ChainService } from '../chain/chain.service'

@Controller('mnemonic')
export class MnemonicController {
  constructor(
    private readonly mnemonicService: MnemonicService,
    private readonly walletService: WalletService,
    private readonly chainService: ChainService
  ) {}

  @Post()
  async create(@Body() createMnemonicDto: CreateMnemonicDto) {
    // 创建助记词的同时，创建钱包
    const chain = await this.chainService.findOne(createMnemonicDto.chain_id)

    // 非 evm 系, 且未提供 phrase, 则不能自动生成
    if (!chain.evm && !createMnemonicDto.phrase) {
      return {
        code: 201,
        message: 'Only evm mnemonics are supported'
      }
    }
    const mnemonic = await this.mnemonicService.create(createMnemonicDto)

    if (chain.evm) {
      await this.walletService.createByMnemonic(mnemonic, 0)
    }
    return {}
  }

  @Post('create_wallet')
  async createWallet(@Body('mnemonicId') mnemonicId: number) {
    const mnemonic = await this.mnemonicService.findOneById(mnemonicId)

    const count = await this.walletService.findCountByMnemonic(mnemonic)
    await this.walletService.createByMnemonic(mnemonic, count)

    return null
  }

  @Get()
  findAll() {
    return this.mnemonicService.findAll()
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mnemonicService.remove(+id)
  }
}
