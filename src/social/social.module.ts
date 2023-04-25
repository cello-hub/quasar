import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { SocialService } from './social.service'
import { SocialController } from './social.controller'
import { Social } from 'src/entities/social'

@Module({
  imports: [TypeOrmModule.forFeature([Social])],
  controllers: [SocialController],
  providers: [SocialService]
})
export class SocialModule {}
