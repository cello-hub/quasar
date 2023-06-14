import { Controller, Get, Post, Body, Put, Param, Query } from '@nestjs/common'
import { EcosystemService } from './ecosystem.service'
import { CreateEcosystemDto } from './dto/create-ecosystem.dto'
import { UpdateEcosystemDto } from './dto/update-ecosystem.dto'
import { FindEcosystemDto } from './dto/find-ecosystem.dto'

@Controller('ecosystem')
export class EcosystemController {
  constructor(private readonly ecosystemService: EcosystemService) {}

  @Post()
  create(@Body() createEcosystemDto: CreateEcosystemDto) {
    return this.ecosystemService.create(createEcosystemDto)
  }

  @Get()
  findAll(@Query() query: FindEcosystemDto) {
    console.log(query)

    return this.ecosystemService.findAll(query)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ecosystemService.findOne(+id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEcosystemDto: UpdateEcosystemDto
  ) {
    return this.ecosystemService.update(+id, updateEcosystemDto)
  }
}
