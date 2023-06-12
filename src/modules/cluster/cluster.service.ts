import Cluster from '../../entities/cluster'
import { Injectable } from '@nestjs/common'
import { SaveClusterDto } from './dto/save-cluster.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { decrypt } from '../../utils/AESEncrypt'

@Injectable()
export class ClusterService {
  constructor(
    @InjectRepository(Cluster)
    private readonly repository: Repository<Cluster>
  ) {}

  findAll() {
    return this.repository.find().then((clusters) => {
      return clusters.map((cluster) => {
        cluster.evm_mnemonic &&
          (cluster.evm_mnemonic = decrypt(cluster.evm_mnemonic))
        cluster.sui_mnemonic &&
          (cluster.sui_mnemonic = decrypt(cluster.sui_mnemonic))
        return cluster
      })
    })
  }

  async save(saveClusterDto: SaveClusterDto) {
    if (saveClusterDto.id) {
      // const cluster = await this.findOne(saveClusterDto.id)
      await this.repository.update(saveClusterDto.id, saveClusterDto)
    } else {
      let cluster = new Cluster()
      cluster = Object.assign(cluster, saveClusterDto)
      return this.repository.save(cluster)
    }
  }

  findOneByCondition(condition) {
    return this.repository.findOneBy(condition)
  }

  findOne(id: number) {
    return `This action returns a #${id} cluster`
  }

  remove(id: number) {
    return `This action removes a #${id} cluster`
  }
}
