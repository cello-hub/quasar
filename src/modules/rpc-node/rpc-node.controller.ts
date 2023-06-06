import { SaveRpcNodeDto } from './dto/save-rpc-node.dto'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { RpcNodeService } from './rpc-node.service'

@Controller('rpc_node')
export class RpcNodeController {
  constructor(private readonly rpcNodeService: RpcNodeService) {}

  @Get(':chainId')
  find(@Param('chainId') chainId: number) {
    return this.rpcNodeService.findByChainId(chainId)
  }

  @Post()
  save(@Body() dto: SaveRpcNodeDto) {
    return this.rpcNodeService.save(dto)
  }
}
