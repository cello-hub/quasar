import { Module } from '@nestjs/common'
import { BalanceService } from './balance.service'
import { BalanceController } from './balance.controller'
import Balance from '../../entities/balance'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Balance])],
  controllers: [BalanceController],
  providers: [BalanceService]
})
export class BalanceModule {}
