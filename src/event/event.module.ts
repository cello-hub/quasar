import { TypeOrmModule } from '@nestjs/typeorm'
import { Event } from './../entities/event'
import { Module } from '@nestjs/common'
import { EventService } from './event.service'
import { EventController } from './event.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
