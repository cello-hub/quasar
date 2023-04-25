import { TypeOrmModule } from '@nestjs/typeorm'
import { SheepEvent } from './../entities/sheepEvent'
import { Module } from '@nestjs/common'
import { SheepEventService } from './sheep-event.service'
import { SheepEventController } from './sheep-event.controller'

@Module({
  imports: [TypeOrmModule.forFeature([SheepEvent])],
  controllers: [SheepEventController],
  providers: [SheepEventService]
})
export class SheepEventModule {}
