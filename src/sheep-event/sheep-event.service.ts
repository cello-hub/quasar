import { SheepEvent } from './../entities/sheepEvent'
import { Injectable } from '@nestjs/common'
import { CreateSheepEventDto } from './dto/create-sheep-event.dto'
import { UpdateSheepEventDto } from './dto/update-sheep-event.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class SheepEventService {
  constructor(
    @InjectRepository(SheepEvent)
    private readonly repository: Repository<SheepEvent>
  ) {}

  create(createSheepEventDto: CreateSheepEventDto) {
    console.log(createSheepEventDto)

    const sheepEvent = new SheepEvent()
    sheepEvent.name = createSheepEventDto.name
    sheepEvent.desc = createSheepEventDto.desc
    sheepEvent.link = createSheepEventDto.link
    sheepEvent.finished = !!createSheepEventDto.finished
    sheepEvent.remark = createSheepEventDto.remark
    console.log(sheepEvent)

    return this.repository.save(sheepEvent)
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id })
  }

  update(id: number, updateSheepEventDto: UpdateSheepEventDto) {
    console.log(updateSheepEventDto)

    return this.repository.update(id, {
      ...updateSheepEventDto,
      finished: !!updateSheepEventDto.finished
    })
  }

  remove(id: number) {
    return `This action removes a #${id} sheepEvent`
  }
}
