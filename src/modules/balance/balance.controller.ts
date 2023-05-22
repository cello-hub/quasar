import { Controller, Get, Param, Post } from '@nestjs/common'
import { BalanceService } from './balance.service'

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get()
  findAll() {
    return this.balanceService.findAll()
  }

  @Post('sync/:address/:chain?/:token?')
  syncBalance(
    @Param('address') address: string,
    @Param('chain_id') chainId: string,
    @Param('token_id') tokenId?: string
  ) {
    return this.balanceService.sync(address, chainId, tokenId)
  }
}
