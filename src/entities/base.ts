import dayjs from 'dayjs'
import {
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm'

export default class BaseEntity {
  @PrimaryGeneratedColumn({
    comment: '自增主键'
  })
  id: number

  @CreateDateColumn({
    type: 'timestamp',
    transformer: {
      from: (date: Date) => {
        return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
      },
      to: () => {
        return new Date()
      }
    },
    comment: '创建时间'
  })
  created_at: Date

  @UpdateDateColumn({
    type: 'timestamp',
    transformer: {
      from: (date: Date) => {
        return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
      },
      to: () => {
        return new Date()
      }
    },
    comment: '更新时间'
  })
  updated_at: Date

  get formattedCreatedAt() {
    return '100'
  }
}
