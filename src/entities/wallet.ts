import BaseEntity from './base'
import { Entity, Column } from 'typeorm'

@Entity()
export class Wallet extends BaseEntity {
  @Column({
    unique: true,
    nullable: false,
    comment: '账户地址'
  })
  address: string

  @Column({
    nullable: true,
    comment: '私钥'
  })
  pk: string

  @Column({
    nullable: true,
    unique: true,
    comment: '别名'
  })
  alias: string

  @Column({
    default: '0',
    comment: '账户余额'
  })
  balance: string

  @Column({
    default: false,
    comment: '是否为主账户'
  })
  master: boolean

  @Column({
    default: true,
    comment: '是否可用'
  })
  available: boolean
}
