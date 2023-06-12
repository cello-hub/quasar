import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { CreateSocialDto } from './dto/create-social.dto'
import { UpdateSocialDto } from './dto/update-social.dto'
import Social from '../../entities/social'
import { Repository } from 'typeorm'
import { encrypt } from '../../utils/AESEncrypt'

@Injectable()
export class SocialService {
  constructor(
    @InjectRepository(Social)
    private readonly repository: Repository<Social>
  ) {}

  create(createSocialDto: CreateSocialDto) {
    const social = new Social()
    social.account = createSocialDto.account
    social.password = encrypt(createSocialDto.password)
    social.platform = createSocialDto.platform
    social.available = !!createSocialDto.available
    social.remark = createSocialDto.remark

    return this.repository.save(social)
  }

  findAll() {
    return this.repository.find({
      order: {
        created_at: 'DESC'
      }
    })
  }

  update(id: number, updateSocialDto: UpdateSocialDto) {
    return this.repository.update(id, {
      ...updateSocialDto,
      available: !!updateSocialDto.available
    })
  }

  remove(id: number) {
    return `This action removes a #${id} social`
  }

  findOneById(id: number) {
    return this.repository.findOneBy({ id })
  }

  findOneByCondition(condition) {
    return this.repository.findOneBy(condition)
  }
}
