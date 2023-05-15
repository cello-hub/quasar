import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common'
import { EcosystemService } from './ecosystem.service'
import { CreateEcosystemDto } from './dto/create-ecosystem.dto'
import { UpdateEcosystemDto } from './dto/update-ecosystem.dto'

@Controller('ecosystem')
export class EcosystemController {
  constructor(private readonly ecosystemService: EcosystemService) {}

  @Post()
  create(@Body() createEcosystemDto: CreateEcosystemDto) {
    return this.ecosystemService.create(createEcosystemDto)
  }

  @Get()
  findAll() {
    return this.ecosystemService.findAll()
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
