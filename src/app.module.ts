import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { WalletModule } from './wallet/wallet.module'
import { Wallet } from './entities/wallet'
import { Chain } from './entities/chain'
import { ChainModule } from './chain/chain.module'
import { Couponer } from './entities/couponer'
import { Social } from './entities/social'
import { SocialModule } from './social/social.module'
import { Event } from './entities/event'
import { EventModule } from './event/event.module'
import { ENV_DEV, ENV_PROD } from './utils/env'
import { RpcNode } from './entities/rpc-node'
import { Admin } from './entities/admin'
import { TwitterModule } from './twitter/twitter.module'

const envFilePath = ['.env']
if (ENV_DEV) {
  envFilePath.unshift('.env.dev')
} else if (ENV_PROD) {
  envFilePath.unshift('.env.prod')
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('MYSQL_HOST'),
          port: Number(configService.get('MYSQL_PORT')),
          username: configService.get('MYSQL_USER'),
          password: configService.get('MYSQL_PASSWORD'),
          database: configService.get('MYSQL_DATABASE'),
          synchronize: true,
          autoLoadEntities: true
        }
      },
      inject: [ConfigService]
    }),
    TypeOrmModule.forFeature([
      Admin,
      Wallet,
      Chain,
      Couponer,
      Social,
      Event,
      RpcNode
    ]),
    WalletModule,
    ChainModule,
    SocialModule,
    EventModule,
    TwitterModule
  ],
  controllers: []
})
export class AppModule {}
