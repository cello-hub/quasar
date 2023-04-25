import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common'
import { SheepEventService } from './sheep-event.service'
import { CreateSheepEventDto } from './dto/create-sheep-event.dto'
import { UpdateSheepEventDto } from './dto/update-sheep-event.dto'

@Controller('sheep-event')
export class SheepEventController {
  constructor(private readonly sheepEventService: SheepEventService) {}

  @Post()
  create(@Body() createSheepEventDto: CreateSheepEventDto) {
    return this.sheepEventService.create(createSheepEventDto)
  }

  @Get()
  findAll() {
    return this.sheepEventService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sheepEventService.findOne(+id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSheepEventDto: UpdateSheepEventDto
  ) {
    return this.sheepEventService.update(+id, updateSheepEventDto)
  }
}
