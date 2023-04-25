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
    comment: '创建时间'
  })
  created_at: Date

  @UpdateDateColumn({
    type: 'timestamp',
    comment: '更新时间'
  })
  updated_at: Date
}
