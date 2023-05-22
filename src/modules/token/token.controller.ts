import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common'
import { TokenService } from './token.service'
import { CreateTokenDto } from './dto/create-token.dto'
import { UpdateTokenDto } from './dto/update-token.dto'

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get()
  findAll() {
    return this.tokenService.findAll()
  }

  @Post()
  create(@Body() createTokenDto: CreateTokenDto) {
    return this.tokenService.create(createTokenDto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTokenDto: UpdateTokenDto) {
    return this.tokenService.update(+id, updateTokenDto)
  }
}
