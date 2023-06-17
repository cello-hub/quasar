import { Body, Controller, Post } from '@nestjs/common'
import { SaveParticipateDto } from './dto/save-participate.dto'
import { ParticipateService } from './participate.service'

@Controller('participate')
export class ParticipateController {
  constructor(private readonly participateService: ParticipateService) {}

  @Post()
  save(@Body() dto: SaveParticipateDto) {
    return this.participateService.save(dto)
  }
}
