import { Injectable } from '@nestjs/common'
import { CreateTwitterDto } from './dto/create-twitter.dto'
import { UpdateTwitterDto } from './dto/update-twitter.dto'
import { TwitterApi } from 'twitter-api-v2'

@Injectable()
export class TwitterService {
  create(createTwitterDto: CreateTwitterDto) {
    return 'This action adds a new twitter'
  }

  async findAll() {
    const client = new TwitterApi(
      'AAAAAAAAAAAAAAAAAAAAAJJPnQEAAAAArGLDvTSp7R%2F3zwn%2FOgon0HB1zSA%3DbUFzEbEuOI4EXUwDBuKiQecHY4psQIXowLovsrE5jftjaE2OBP'
    )

    const user = await client.v2.userByUsername('gwanbit')
    return `This action returns all twitter`
  }

  findOne(id: number) {
    return `This action returns a #${id} twitter`
  }

  update(id: number, updateTwitterDto: UpdateTwitterDto) {
    return `This action updates a #${id} twitter`
  }

  remove(id: number) {
    return `This action removes a #${id} twitter`
  }
}
