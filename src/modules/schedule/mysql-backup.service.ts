import { Injectable } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'

@Injectable()
export class MysqlBackupService {
  @Cron(CronExpression.EVERY_10_SECONDS)
  backup() {
    console.log('backup')
  }
}
