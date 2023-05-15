import { PartialType } from '@nestjs/mapped-types'
import { CreateEcosystemDto } from './create-ecosystem.dto'

export class UpdateEcosystemDto extends PartialType(CreateEcosystemDto) {}
