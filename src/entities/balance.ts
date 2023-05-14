import BaseEntity from './base'
import { Column, Entity, Index, ManyToOne } from 'typeorm'
import Wallet from './wallet'
import Token from './token'

@Entity()
export default class Balance extends BaseEntity {
  @ManyToOne(() => Wallet)
  wallet: Wallet

  @ManyToOne(() => Token)
  @Index(['wallet', 'token'], { unique: true })
  token: Token

  @Column({
    default: '0',
    comment: '余额'
  })
  amount: string

  @Column({
    nullable: true,
    comment: 'erc721 tokenId'
  })
  token_id: number

  @Column({
    default: '0',
    comment: '等值于多少USDT'
  })
  usdt_value: string
}
