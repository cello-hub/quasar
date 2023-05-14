import { Controller, Get } from '@nestjs/common'
import { BalanceService } from './balance.service'

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get()
  findAll() {
    return this.balanceService.findAll()
  }
}
