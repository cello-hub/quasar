import BaseEntity from './base'
import { Column, Entity, ManyToOne, Unique } from 'typeorm'
import Ecosystem from './ecosystem'
import Cluster from './cluster'
import dayjs from '../utils/dayjs'

@Entity()
@Unique(['ecosystem', 'cluster'])
export default class Participate extends BaseEntity {
  @ManyToOne(() => Ecosystem, { nullable: false })
  ecosystem: Ecosystem

  @ManyToOne(() => Cluster, { nullable: false })
  cluster: Cluster

  @Column({
    default: 0,
    comment: '成本'
  })
  cost: number

  @Column({
    type: 'timestamp',
    nullable: true,
    transformer: {
      from: (date: Date) => {
        return date ? dayjs(date).format('YYYY-MM-DD HH:mm:ss') : ''
      },
      to: (date: Date) => {
        return date
      }
    },
    comment: '参与时间'
  })
  date: Date

  @Column({
    type: 'simple-array',
    comment: '参与的地址有哪些, 由账号组的助记词衍生的地址',
    nullable: true
  })
  addresses: string[]

  @Column({
    default: 0,
    comment: '收益'
  })
  profit: number

  @Column({
    nullable: true,
    comment: '备注'
  })
  remark: string
}
