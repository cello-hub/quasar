import { Module } from '@nestjs/common'
import { ClusterService } from './cluster.service'
import { ClusterController } from './cluster.controller'
import Cluster from '../../entities/cluster'
import { TypeOrmModule } from '@nestjs/typeorm'
import Social from '../../entities/social'
import { SocialService } from '../social/social.service'
import Mnemonic from '../../entities/mnemonic'
import { MnemonicService } from '../mnemonic/mnemonic.service'
import { ChainService } from '../chain/chain.service'
import Chain from '../../entities/chain'

@Module({
  imports: [TypeOrmModule.forFeature([Cluster, Social, Mnemonic, Chain])],
  controllers: [ClusterController],
  providers: [ClusterService, SocialService, MnemonicService, ChainService]
})
export class ClusterModule {}
