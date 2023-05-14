import { Column, Entity } from 'typeorm'
import BaseEntity from './base'

// 撸毛事件
@Entity()
export default class Event extends BaseEntity {
  @Column({
    nullable: false,
    comment: '名称'
  })
  name: string

  @Column({
    nullable: true,
    comment: '描述'
  })
  desc: string

  @Column({
    nullable: true,
    comment: '链接'
  })
  link: string

  @Column({
    default: false,
    comment: '是否结束'
  })
  finished: boolean

  @Column({
    comment: '备注'
  })
  remark: string
}
