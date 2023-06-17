import Cluster from '../../entities/cluster'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import Ecosystem from '../../entities/ecosystem'
import Participate from 'src/entities/participate'
import { Repository } from 'typeorm'
import { SaveParticipateDto } from './dto/save-participate.dto'

@Injectable()
export class ParticipateService {
  constructor(
    @InjectRepository(Participate)
    private readonly repository: Repository<Participate>
  ) {}

  save(dto: SaveParticipateDto, ecosystem?: Ecosystem, cluster?: Cluster) {
    const participate = new Participate()
    if (ecosystem) participate.ecosystem = ecosystem
    if (cluster) participate.cluster = cluster
    participate.addresses = ['1', '2']

    this.repository.save(participate)
    return {}
  }
}
