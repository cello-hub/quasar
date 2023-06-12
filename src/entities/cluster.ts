import { Column, Entity } from 'typeorm'
import BaseEntity from './base'

// 账号组

@Entity()
export default class Cluster extends BaseEntity {
  @Column({
    unique: true,
    nullable: false,
    comment: '组名'
  })
  name: string

  @Column({
    nullable: true,
    comment: '谷歌邮箱'
  })
  google: string

  @Column({
    nullable: true,
    comment: '推特账号'
  })
  twitter: string

  @Column({
    nullable: true,
    comment: 'dc账号'
  })
  discord: string

  @Column({
    nullable: true,
    comment: 'evm 助记词'
  })
  evm_mnemonic: string

  @Column({
    nullable: true,
    comment: 'sui 助记词'
  })
  sui_mnemonic: string

  @Column({
    nullable: true,
    comment: 'sui 助记词'
  })
  btc_mnemonic: string
}
