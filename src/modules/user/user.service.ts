import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import User from '../../entities/user'
import { encrypt } from '../../utils/AESEncrypt'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
  ) {}

  findOne(username: string) {
    return this.repository.findOneBy({ username })
  }

  async create(username: string, password) {
    const user = new User()
    user.username = username
    user.password = encrypt(password)

    return await this.repository.save(user)
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
