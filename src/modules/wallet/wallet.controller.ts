import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common'
import { WalletService } from './wallet.service'
import { UpdateWalletDto } from './dto/update-wallet.dto'
import { decrypt } from '../../utils/AESEncrypt'
import { ethers } from 'ethers'

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  create() {
    return this.walletService.create()
  }

  @Put('balance/:address')
  updateBalance(
    @Param('address') address: string,
    @Body('balance') balance: string
  ) {
    this.walletService.updateBalance(address, balance)
  }

  @Put(':id')
  async updateWallet(
    @Param('id') id: number,
    @Body() updateWalletDto: UpdateWalletDto
  ) {
    await this.walletService.updateById(id, updateWalletDto)

    return {
      message: 'success'
    }
  }

  @Get('pk/:address')
  async getPk(@Param('address') address: string) {
    const wallet = await this.walletService.findOneByAddress(address)

    const secret = decrypt(wallet.secret)
    if (secret) {
      return { secret }
    } else {
      return {
        code: 400,
        message: 'The wallet has no private key'
      }
    }
  }

  @Get()
  async findAll() {
    const list = await this.walletService.findAll()
    return list.map((wallet) => {
      wallet.amount = parseFloat(ethers.formatEther(wallet.amount)).toFixed(4)

      return wallet
    })
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.accountService.findOne(+id)
  // }
}
