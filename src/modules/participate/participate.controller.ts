import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { SaveParticipateDto } from './dto/save-participate.dto'
import { ParticipateService } from './participate.service'

@Controller('participate')
export class ParticipateController {
  constructor(private readonly participateService: ParticipateService) {}

  @Get()
  findAll(@Query('ecosystemId') ecosystemId: number) {
    console.log(ecosystemId)

    return this.participateService.findByEcosystemId(ecosystemId)
  }

  @Post()
  save(@Body() dto: SaveParticipateDto) {
    return this.participateService.save(dto)
  }
}
