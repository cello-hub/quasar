import { Column, Entity, ManyToOne } from 'typeorm'
import BaseEntity from './base'
import Chain from './chain'

// 助记词

@Entity()
export default class Mnemonic extends BaseEntity {
  @Column({
    nullable: false,
    comment: '助记词, 单词之间用空格隔开'
  })
  phrase: string

  @ManyToOne(() => Chain, { nullable: false })
  chain: Chain

  @Column({
    nullable: true,
    comment: '备注'
  })
  remark: string
}
