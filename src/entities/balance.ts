import BaseEntity from './base'
import { Column, Entity, Index, ManyToOne } from 'typeorm'
import Wallet from './wallet'
import Token from './token'

// 钱包余额表(仅token)

@Entity()
export default class Balance extends BaseEntity {
  @ManyToOne(() => Wallet)
  wallet: Wallet

  @ManyToOne(() => Token, { nullable: false })
  @Index(['wallet', 'token'], { unique: true })
  token: Token

  @Column({
    default: '0',
    comment: '余额'
  })
  amount: string

  @Column({
    nullable: true,
    type: 'simple-array',
    comment: 'erc721 tokenId'
  })
  token_ids: string[]

  @Column({
    default: '0',
    comment: '等值于多少USDT'
  })
  usdt_value: string
}
