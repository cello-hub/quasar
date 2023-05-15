import Ecosystem from '../../entities/ecosystem'
import { Injectable } from '@nestjs/common'
import { CreateEcosystemDto } from './dto/create-ecosystem.dto'
import { UpdateEcosystemDto } from './dto/update-ecosystem.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class EcosystemService {
  constructor(
    @InjectRepository(Ecosystem)
    private readonly repository: Repository<Ecosystem>
  ) {}

  create(createEcosystemDto: CreateEcosystemDto) {
    const eco = new Ecosystem()
    eco.name = createEcosystemDto.name
    eco.desc = createEcosystemDto.desc
    eco.link = createEcosystemDto.link
    eco.finished = !!createEcosystemDto.finished
    eco.remark = createEcosystemDto.remark

    return this.repository.save(eco)
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id })
  }

  update(id: number, updateEcosystemDto: UpdateEcosystemDto) {
    return this.repository.update(id, {
      ...updateEcosystemDto,
      finished: !!updateEcosystemDto.finished
    })
  }

  remove(id: number) {
    return `This action removes a #${id} event`
  }
}
