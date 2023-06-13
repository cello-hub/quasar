import BaseEntity from './base'
import { Entity, Column, ManyToOne } from 'typeorm'
import dayjs from '../utils/dayjs'
import Ecosystem from './ecosystem'

@Entity()
export default class Task extends BaseEntity {
  @Column({
    type: 'timestamp',
    nullable: true,
    transformer: {
      from: (date: Date) => {
        return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
      },
      to: () => {
        return new Date()
      }
    },
    comment: '待办时间, 为空表示待定'
  })
  date: Date

  @Column({
    nullable: false
  })
  name: string

  @ManyToOne(() => Ecosystem, { nullable: true })
  ecosystem: Ecosystem

  @Column({
    default: false,
    comment: '任务是否完成'
  })
  finished: false

  @Column({
    nullable: true,
    comment: '备注'
  })
  remark: string
}
