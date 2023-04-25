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
import { SheepEvent } from './entities/sheepEvent'
import { SheepEventModule } from './sheep-event/sheep-event.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true
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
    TypeOrmModule.forFeature([Wallet, Chain, Couponer, Social, SheepEvent]),
    WalletModule,
    ChainModule,
    SocialModule,
    SheepEventModule
  ],
  controllers: []
})
export class AppModule {}
