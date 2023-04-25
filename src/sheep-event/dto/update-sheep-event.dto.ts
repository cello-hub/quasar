import { PartialType } from '@nestjs/mapped-types'
import { CreateSheepEventDto } from './create-sheep-event.dto'

export class UpdateSheepEventDto extends PartialType(CreateSheepEventDto) {}
