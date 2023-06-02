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

    if (address !== process.env.LOGINABLE_ADDRESS) {
      return res.status(401).send('Unauthorized')
    }

    const validAddress = await ethers.verifyMessage(message, signedMessage)
    if (validAddress === address && address === process.env.LOGINABLE_ADDRESS) {
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
