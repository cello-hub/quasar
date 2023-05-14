import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ENV_DEV, ENV_PROD } from './utils/env'
import modules from './modules'
import tables from './tables'

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
          autoLoadEntities: true,
          logging: ENV_DEV
        }
      },
      inject: [ConfigService]
    }),
    TypeOrmModule.forFeature([...tables]),
    ...modules
  ],
  controllers: []
})
export class AppModule {}
