import { Injectable } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'
import mysqldump from 'mysqldump'
import dayjs from '../../utils/dayjs'

@Injectable()
export class MysqlBackupService {
  @Cron(CronExpression.EVERY_12_HOURS)
  backup() {
    mysqldump({
      connection: {
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
      },
      dumpToFile: `${
        process.env.MYSQL_LOCAL_BACKUP_PATH
      }/quasar.${dayjs().format('YYYY_MM_DD-HH_mm_ss')}.sql`
    })
  }
}
