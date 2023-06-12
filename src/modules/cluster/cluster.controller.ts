import { MnemonicService } from './../mnemonic/mnemonic.service'
import { SaveClusterDto } from './dto/save-cluster.dto'
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { ClusterService } from './cluster.service'
import { SocialService } from '../social/social.service'
import { encrypt } from '../../utils/AESEncrypt'
import { ChainService } from '../chain/chain.service'

@Controller('cluster')
export class ClusterController {
  constructor(
    private readonly clusterService: ClusterService,
    private readonly socialService: SocialService,
    private readonly mnemonicService: MnemonicService,
    private readonly chainService: ChainService
  ) {}

  @Post()
  async save(@Body() saveClusterDto: SaveClusterDto) {
    // 确保已存在在对应的表中, 且在该表中具有唯一性
    if (saveClusterDto.google) {
      const google = await this.socialService.findOneByCondition({
        account: saveClusterDto.google,
        platform: 'Google'
      })
      if (!google) {
        return {
          code: 500,
          message: 'Google账号不存在的, 请先去 Social 添加'
        }
      }
      const cluster = await this.clusterService.findOneByCondition({
        google: saveClusterDto.google
      })

      if (
        cluster &&
        ((saveClusterDto.id && saveClusterDto.id !== cluster.id) ||
          !saveClusterDto.id)
      ) {
        return {
          code: 500,
          message: `Google账号已存在于 ${cluster.name} 账号组中`
        }
      }
    }

    if (saveClusterDto.twitter) {
      const twitter = await this.socialService.findOneByCondition({
        account: saveClusterDto.twitter,
        platform: 'Twitter'
      })
      if (!twitter) {
        return {
          code: 500,
          message: 'Twitter账号不存在的, 请先去 Social 添加'
        }
      }
      const cluster = await this.clusterService.findOneByCondition({
        twitter: saveClusterDto.twitter
      })
      if (
        cluster &&
        ((saveClusterDto.id && saveClusterDto.id !== cluster.id) ||
          !saveClusterDto.id)
      ) {
        return {
          code: 500,
          message: `Twitter 账号已存在于 ${cluster.name} 账号组中`
        }
      }
    }

    if (saveClusterDto.discord) {
      const discord = await this.socialService.findOneByCondition({
        account: saveClusterDto.discord,
        platform: 'Discord'
      })
      if (!discord) {
        return {
          code: 500,
          message: 'Discord 账号不存在的, 请先去 Social 添加'
        }
      }
      const cluster = await this.clusterService.findOneByCondition({
        discord: saveClusterDto.discord
      })
      if (
        cluster &&
        ((saveClusterDto.id && saveClusterDto.id !== cluster.id) ||
          !saveClusterDto.id)
      ) {
        return {
          code: 500,
          message: `Discord 账号已存在于 ${cluster.name} 账号组中`
        }
      }
    }

    if (saveClusterDto.evm_mnemonic) {
      const evm_mnemonic = saveClusterDto.evm_mnemonic.trim()
      const encryptedEvmMnemonic = encrypt(evm_mnemonic)

      const mnemonic = await this.mnemonicService.findOneByCondition({
        phrase: encryptedEvmMnemonic,
        chainId: (
          await this.chainService.findOneBycondition({
            topic: 'Ethereum'
          })
        ).id
      })
      if (!mnemonic) {
        return {
          code: 500,
          message: 'evm 助记词不存在, 请先去 Mnemonic 添加'
        }
      }
      const cluster = await this.clusterService.findOneByCondition({
        evm_mnemonic: encryptedEvmMnemonic
      })

      if (
        cluster &&
        ((saveClusterDto.id && saveClusterDto.id !== cluster.id) ||
          !saveClusterDto.id)
      ) {
        return {
          code: 500,
          message: `evm 助记词已存在于 ${cluster.name} 账号组中`
        }
      }
      saveClusterDto.evm_mnemonic = encryptedEvmMnemonic
    }
    if (saveClusterDto.sui_mnemonic) {
      const sui_mnemonic = saveClusterDto.sui_mnemonic.trim()
      const encryptedSuiMnemonic = encrypt(sui_mnemonic)

      const mnemonic = await this.mnemonicService.findOneByCondition({
        phrase: encryptedSuiMnemonic,
        chainId: (
          await this.chainService.findOneBycondition({
            topic: 'Sui'
          })
        ).id
      })
      if (!mnemonic) {
        return {
          code: 500,
          message: 'sui 助记词不存在, 请先去 Mnemonic 添加'
        }
      }
      const cluster = await this.clusterService.findOneByCondition({
        sui_mnemonic: encryptedSuiMnemonic
      })

      if (
        cluster &&
        ((saveClusterDto.id && saveClusterDto.id !== cluster.id) ||
          !saveClusterDto.id)
      ) {
        return {
          code: 500,
          message: `sui 助记词已存在于 ${cluster.name} 账号组中`
        }
      }
      saveClusterDto.sui_mnemonic = encryptedSuiMnemonic
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
