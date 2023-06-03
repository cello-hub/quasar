import { Module } from '@nestjs/common'
import { MysqlBackupService } from './mysql-backup.service'
import { ENV_PROD } from '../../utils/env'

// 生产环境启动的定时任务
const PROD_TASK_SERVICES = [MysqlBackupService]

// 开发环境启动的定时任务(用于测试)
const DEV_TASK_SERVICES = []
@Module({
  providers: ENV_PROD ? PROD_TASK_SERVICES : DEV_TASK_SERVICES
})
export class ScheduleModule {}
