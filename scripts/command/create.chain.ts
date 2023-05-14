import { INestApplicationContext } from '@nestjs/common'
import chains from 'src/constants/chains'
import { ChainService } from 'src/chain/chain.service'
import { log } from 'console'

export const CreateChains = async (app: INestApplicationContext) => {
  const service = app.get(ChainService)

  chains.map(async (chain) => {
    console.log(chains)
  })
}
