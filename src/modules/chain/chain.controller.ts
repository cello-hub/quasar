import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import chains from 'src/constants/chains'
import { ChainService } from './chain.service'
import { SaveChainDto } from './dto/save-chain.dto'

@Controller('chain')
export class ChainController {
  constructor(private readonly chainService: ChainService) {}

  @Post('save')
  save(@Body() saveChainDto: SaveChainDto) {
    return this.chainService.save(saveChainDto)
  }

  @Get('sync')
  async sync() {
    for (let i = 0; i < chains.length; i++) {
      await this.chainService.save(chains[i])
    }
    return {}
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
