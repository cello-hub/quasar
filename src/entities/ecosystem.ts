import { Column, Entity, ManyToOne } from 'typeorm'
import BaseEntity from './base'
import Chain from './chain'

// 项目
@Entity()
export default class Ecosystem extends BaseEntity {
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

  @ManyToOne(() => Chain)
  chain: Chain

  @Column({
    nullable: true,
    comment: '官网链接'
  })
  link: string

  @Column({
    nullable: true,
    comment: 'discord链接'
  })
  discord: string

  @Column({
    nullable: true,
    comment: 'twitter链接'
  })
  twitter: string

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
