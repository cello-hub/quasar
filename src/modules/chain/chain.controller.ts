import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import chains from 'src/constants/chains'
import Chain from 'src/entities/chain'
import { TokenService } from '../token/token.service'
import { ChainService } from './chain.service'
import { SaveChainDto } from './dto/save-chain.dto'

@Controller('chain')
export class ChainController {
  constructor(
    private readonly chainService: ChainService,
    private readonly tokenService: TokenService
  ) {}

  @Post('save')
  async save(@Body() saveChainDto: SaveChainDto) {
    const chain = await this.chainService.save(saveChainDto)
    console.log(chain)

    const token = await this.tokenService.findOneBy({
      address: '0x0',
      chain: chain
    })

    console.log(token)
    console.log('==============================')

    if (!token) {
      await this.tokenService.create({
        name: chain.topic,
        symbol: chain.symbol,
        decimal: 18,
        type: 'COIN',
        address: '0x0',
        chain_id: chain.id
      })
    }

    return chain
  }

  @Get('sync')
  async sync() {
    for (let i = 0; i < chains.length; i++) {
      await this.chainService.save(chains[i])
    }
    return {}
  }

  @Post('set_rpc')
  setRpc(@Body('chainId') chainId: number, @Body('url') url: string) {
    return this.chainService.setRpc(chainId, url)
  }

  @Get()
  findAll() {
    return this.chainService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chainService.findOne(+id)
  }
}
