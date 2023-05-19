import BaseEntity from './base'
import { Entity, Column } from 'typeorm'

@Entity()
export default class Social extends BaseEntity {
  @Column({
    nullable: false,
    comment: '账户'
  })
  account: string

  @Column({
    nullable: false,
    comment: '账户密码'
  })
  password: string

  @Column({
    nullable: false,
    comment: '平台'
  })
  platform: string

  @Column({
    default: true,
    comment: '是否可用'
  })
  available: boolean

  @Column({
    nullable: true,
    comment: '备注'
  })
  remark: string
}
