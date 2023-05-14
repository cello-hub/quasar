import { INestApplicationContext } from '@nestjs/common'
import chains from '../../src/constants/chains'
import { ChainService } from '../../src/modules/chain/chain.service'

export const CreateChains = async (app: INestApplicationContext) => {
  const service = app.get(ChainService)

  for (let i = 0; i < chains.length; i++) {
    await service.create(chains[i])
  }
}
