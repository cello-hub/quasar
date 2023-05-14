import { Controller, Post, Body, Response, Ip } from '@nestjs/common'
import { UserService } from './user.service'
import { encrypt } from '../../utils/AESEncrypt'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async loginIn(
    @Ip() ip,
    @Body('username') username,
    @Body('password') password,
    @Response() response
  ) {
    console.log(ip)

    const user = await this.userService.findOne(username)

    if (user && user.password === encrypt(password)) {
      response.cookie('uname', 'lybenson')

      response.send('succeed')
    }
    response.status(400).send('login failed')
  }

  @Post('create')
  async registerIn(@Body('username') username, @Body('password') password) {
    await this.userService.create(username, password)

    return {}
  }
}
