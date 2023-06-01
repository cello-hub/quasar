import { decrypt } from './../../utils/AESEncrypt'
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

@Controller('mnemonic')
export class MnemonicController {
  constructor(
    private readonly mnemonicService: MnemonicService,
    private readonly walletService: WalletService
  ) {}

  @Post()
  async create(@Body() createMnemonicDto: CreateMnemonicDto) {
    // 创建助记词的同时，创建钱包
    const mnemonic = await this.mnemonicService.create(createMnemonicDto)
    await this.walletService.createByMnemonic(mnemonic, 0)
    return mnemonic
  }

  @Get()
  findAll() {
    return this.mnemonicService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mnemonicService.findOne(+id)
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
