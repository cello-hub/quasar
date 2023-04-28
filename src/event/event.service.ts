import { Event } from './../entities/event'
import { Injectable } from '@nestjs/common'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>
  ) {}

  create(createEventDto: CreateEventDto) {
    const event = new Event()
    event.name = createEventDto.name
    event.desc = createEventDto.desc
    event.link = createEventDto.link
    event.finished = !!createEventDto.finished
    event.remark = createEventDto.remark

    return this.repository.save(event)
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id })
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    console.log(updateEventDto)

    return this.repository.update(id, {
      ...updateEventDto,
      finished: !!updateEventDto.finished
    })
  }

  remove(id: number) {
    return `This action removes a #${id} event`
  }
}
