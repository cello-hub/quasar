import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'
import { jwtSecret } from './constant'

const whiteList = ['/auth/login']

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()

    if (whiteList.indexOf(request.url) > -1) return true

    const access_token = this.extractJWTFromCookie(request)
    if (!access_token) {
      throw new UnauthorizedException()
    }
    try {
      const jwtService = new JwtService()
      await jwtService.verifyAsync(access_token, {
        secret: jwtSecret
      })
    } catch {
      throw new UnauthorizedException()
    }
    return true
  }

  private extractJWTFromCookie(request: Request): string | undefined {
    if (request.cookies && request.cookies.access_token) {
      return request.cookies.access_token
    }
    return ''
  }
}
