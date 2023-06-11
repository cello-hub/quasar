import { Controller, Get, Param } from '@nestjs/common'
import { ethers } from 'ethers'
import Balance from '../../entities/balance'
import { ChainService } from '../chain/chain.service'
import { TokenService } from '../token/token.service'
import { BalanceService } from './balance.service'

@Controller('balance')
export class BalanceController {
  constructor(
    private readonly balanceService: BalanceService,
    private readonly chainService: ChainService,
    private readonly tokenService: TokenService
  ) {}

  @Get('sync/:address/:chainId?/:tokenId?')
  async syncBalance(
    @Param('address') address: string,
    @Param('chainId') chainId?: string,
    @Param('tokenId') tokenId?: string
  ) {
    if (chainId) {
      const chain = await this.chainService.findOne(+chainId)
      const provider = new ethers.JsonRpcProvider(chain.rpc_url)
      const amount = (await provider.getBalance(address)).toString()

      console.log(amount)
      if (amount !== '0') {
        // 更新
        const balance = new Balance()
        balance.address = address
        balance.token = await this.tokenService.findOneBy({
          chain: chain,
          address: '0x0'
        })
        balance.amount = amount

        this.balanceService.save(balance)
      }
    }
    // if (tokenId) {
    //   const token = await this.tokenService.findOne(+tokenId)
    // }

    return this.balanceService.sync(address, chainId, tokenId)
  }
}
