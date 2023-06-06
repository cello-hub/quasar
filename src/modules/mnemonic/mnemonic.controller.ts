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

    if (!chain.evm) {
      return {
        code: 201,
        message: 'Only evm mnemonics are supported'
      }
    }
    const mnemonic = await this.mnemonicService.create(createMnemonicDto)
    return await this.walletService.createByMnemonic(mnemonic, 0)
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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMnemonicDto: UpdateMnemonicDto
  ) {
    return this.mnemonicService.update(+id, updateMnemonicDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log(id)

    return this.mnemonicService.remove(+id)
  }
}
