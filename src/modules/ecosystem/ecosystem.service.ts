import Ecosystem from '../../entities/ecosystem'
import { Injectable } from '@nestjs/common'
import { CreateEcosystemDto } from './dto/create-ecosystem.dto'
import { UpdateEcosystemDto } from './dto/update-ecosystem.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ChainService } from '../chain/chain.service'

@Injectable()
export class EcosystemService {
  constructor(
    @InjectRepository(Ecosystem)
    private readonly repository: Repository<Ecosystem>,
    private readonly chainService: ChainService
  ) {}

  async create(createEcosystemDto: CreateEcosystemDto) {
    const eco = new Ecosystem()
    eco.name = createEcosystemDto.name
    eco.desc = createEcosystemDto.desc
    eco.link = createEcosystemDto.link
    eco.discord = createEcosystemDto.discord
    eco.twitter = createEcosystemDto.twitter
    eco.finished = createEcosystemDto.finished
    eco.remark = createEcosystemDto.remark

    eco.chain = await this.chainService.findOne(createEcosystemDto.chain_id)

    return this.repository.save(eco)
  }

  findAll() {
    return this.repository.find({
      relations: ['chain']
    })
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
