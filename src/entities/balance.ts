import BaseEntity from './base'
import { Column, Entity, Index, ManyToOne } from 'typeorm'
import Token from './token'

// 钱包余额表(仅token)

@Entity()
export default class Balance extends BaseEntity {
  @Column({
    nullable: false,
    comment: '钱包地址'
  })
  address: string

  // 对于公链币也会有一天记录，其地址会是0x0
  @ManyToOne(() => Token, { nullable: true })
  @Index(['address', 'token'], { unique: true })
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
