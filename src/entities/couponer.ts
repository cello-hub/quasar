import { Column, Entity } from 'typeorm'
import BaseEntity from './base'

// 撸毛记录
@Entity()
export default class Couponer extends BaseEntity {
  @Column({
    comment: '自定义名称'
  })
  name: string

  @Column({
    comment: '链接'
  })
  link: string

  @Column({
    comment: '交互地址'
  })
  accounts: string

  @Column({
    comment: '交互时间'
  })
  time: Date

  @Column({
    comment: '成本'
  })
  cost: string

  @Column({
    default: false,
    comment: '是否结束'
  })
  finish: boolean

  @Column({
    comment: '备注'
  })
  remark: string
}
