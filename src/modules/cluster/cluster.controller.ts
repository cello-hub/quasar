import { MnemonicService } from './../mnemonic/mnemonic.service'
import { SaveClusterDto } from './dto/save-cluster.dto'
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { ClusterService } from './cluster.service'
import { SocialService } from '../social/social.service'
import { encrypt } from '../../utils/AESEncrypt'

@Controller('cluster')
export class ClusterController {
  constructor(
    private readonly clusterService: ClusterService,
    private readonly socialService: SocialService,
    private readonly mnemonicService: MnemonicService
  ) {}

  @Post()
  async save(@Body() saveClusterDto: SaveClusterDto) {
    // 确保已存在在对应的表中, 且在该表中具有唯一性
    if (saveClusterDto.google) {
      const google = await this.socialService.findOneByCondition({
        account: saveClusterDto.google
      })
      const cluster = await this.clusterService.findOneByCondition({
        google: saveClusterDto.google
      })
      if (!google) {
        return {
          code: 500,
          message: 'Google账号不存在的, 请先去 Social 添加'
        }
      }

      if (cluster) {
        return {
          code: 500,
          message: `Google账号已存在于 ${cluster.name} 账号组中`
        }
      }
    }

    if (saveClusterDto.twitter) {
      const twitter = await this.socialService.findOneByCondition({
        account: saveClusterDto.twitter
      })
      const cluster = await this.clusterService.findOneByCondition({
        twitter: saveClusterDto.twitter
      })
      if (!twitter) {
        return {
          code: 500,
          message: 'Twitter账号不存在的, 请先去 Social 添加'
        }
      }

      if (cluster) {
        return {
          code: 500,
          message: `Twitter账号已存在于 ${cluster.name} 账号组中`
        }
      }
    }

    if (saveClusterDto.discord) {
      const discord = await this.socialService.findOneByCondition({
        account: saveClusterDto.discord
      })
      const cluster = await this.clusterService.findOneByCondition({
        discord: saveClusterDto.discord
      })
      if (!discord) {
        return {
          code: 500,
          message: 'Discord 账号不存在的, 请先去 Social 添加'
        }
      }

      if (cluster) {
        return {
          code: 500,
          message: `Discord 账号已存在于 ${cluster.name} 账号组中`
        }
      }
    }

    if (saveClusterDto.evm_mnemonic) {
      const mnemonic = await this.mnemonicService.findOneByCondition({
        phrase: encrypt(saveClusterDto.evm_mnemonic)
      })
      const cluster = await this.clusterService.findOneByCondition({
        evm_mnemonic: saveClusterDto.evm_mnemonic
      })
      if (!mnemonic) {
        return {
          code: 500,
          message: 'evm 助记词不存在, 请先去 Mnemonic 添加'
        }
      }

      if (cluster) {
        return {
          code: 500,
          message: `evm 助记词已存在于 ${cluster.name} 账号组中`
        }
      }
    }
    if (saveClusterDto.sui_mnemonic) {
    }
    if (saveClusterDto.btc_mnemonic) {
    }
    return this.clusterService.save(saveClusterDto)
  }

  @Get()
  findAll() {
    return this.clusterService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clusterService.findOne(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clusterService.remove(+id)
  }
}
