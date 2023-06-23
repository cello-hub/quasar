import Cluster from '../../entities/cluster'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import Ecosystem from '../../entities/ecosystem'
import Participate from '../../entities/participate'
import { Repository } from 'typeorm'
import { SaveParticipateDto } from './dto/save-participate.dto'

@Injectable()
export class ParticipateService {
  constructor(
    @InjectRepository(Participate)
    private readonly repository: Repository<Participate>
  ) {}

  findByEcosystemId(ecosystemId: number) {
    return this.repository
      .createQueryBuilder('participate')
      .leftJoinAndSelect('participate.ecosystem', 'ecosystem')
      .leftJoinAndSelect('participate.cluster', 'cluster')
      .where('ecosystem.id=:id', { id: ecosystemId })
      .getMany()
  }

  save(dto: SaveParticipateDto, ecosystem?: Ecosystem, cluster?: Cluster) {
    const participate = new Participate()
    if (ecosystem) participate.ecosystem = ecosystem
    if (cluster) participate.cluster = cluster
    participate.addresses = ['1', '2']

    this.repository.save(participate)
    return {}
  }
}
