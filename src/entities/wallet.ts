import BaseEntity from './base'
import { Entity, Column, ManyToOne } from 'typeorm'
import Chain from './chain'
import Mnemonic from './mnemonic'
@Entity()
export default class Wallet extends BaseEntity {
  @Column({
    unique: true,
    nullable: false,
    comment: '账户地址'
  })
  address: string

  @ManyToOne(() => Chain, { nullable: true })
  chain: Chain

  @Column({
    default: true,
    comment: '是否evm系钱包'
  })
  is_evm: boolean

  @ManyToOne(() => Mnemonic, { nullable: true })
  mnemonic: Mnemonic

  @Column({
    nullable: true,
    comment: '私钥'
  })
  secret: string

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
  amount: string

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
