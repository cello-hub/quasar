import {
  Controller,
  Post,
  Body,
  Res,
  UnauthorizedException
} from '@nestjs/common'
import { ethers } from 'ethers'
import { JwtService } from '@nestjs/jwt'

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Post('login')
  async login(@Body() body, @Res() res) {
    const { address, message, signedMessage } = body

    const validAddress = await ethers.verifyMessage(message, signedMessage)

    if (
      validAddress === address &&
      address === '0xB483169fb514727AA8CC68fFcf8E43c254F83cD2'
    ) {
      console.log(body)

      const access_token = await this.jwtService.signAsync(body)

      res
        .cookie('access_token', access_token, {
          httpOnly: true,
          secure: true,
          sameSite: 'none'
        })
        .send({
          code: 200
        })
    } else {
      throw new UnauthorizedException()
    }
  }
}
