import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { SocialService } from './social.service'
import { CreateSocialDto } from './dto/create-social.dto'
import { UpdateSocialDto } from './dto/update-social.dto'
import { decrypt } from 'src/utils/AESEncrypt'

@Controller('social')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post()
  create(@Body() createSocialDto: CreateSocialDto) {
    return this.socialService.create(createSocialDto)
  }

  @Get()
  findAll() {
    return this.socialService.findAll()
  }

  @Get('password/:id')
  async findPassword(@Param('id') id: string) {
    const social = await this.socialService.findOneById(+id)

    const password = decrypt(social.password)

    if (password) {
      return { password }
    }
    return {
      code: 400
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSocialDto: UpdateSocialDto) {
    return this.socialService.update(+id, updateSocialDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialService.remove(+id)
  }
}
