import { Module } from '@nestjs/common'
import { MysqlBackupService } from './mysql-backup.service'

@Module({
  providers: [MysqlBackupService]
})
export class ScheduleModule {}
