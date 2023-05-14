import { INestApplicationContext } from '@nestjs/common'
import { WalletService } from '../../src/modules/wallet/wallet.service'

export const GetAccounts = async (app: INestApplicationContext) => {
  console.log('create account')
  const service = app.get(WalletService)
  const list = await service.findAll()
  console.log(list)
}
