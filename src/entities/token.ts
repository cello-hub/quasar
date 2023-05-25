import BaseEntity from './base'
import { Entity, Column, ManyToOne, Index } from 'typeorm'
import Chain from './chain'

@Entity()
export default class Token extends BaseEntity {
  @Column({
    nullable: false,
    comment: '合约地址'
  })
  address: string

  @ManyToOne(() => Chain)
  @Index(['address', 'chain'], { unique: true })
  chain: Chain

  @Column({
    nullable: false,
    comment: '名称'
  })
  name: string

  @Column({
    nullable: false,
    comment: '简写'
  })
  symbol: string

  @Column({
    comment: '精度'
  })
  decimal: number

  @Column({
    nullable: false,
    comment: '类型 ERC20 ERC721'
  })
  type: string

  @Column({
    nullable: true,
    comment: 'token logo 链接'
  })
  logo: string
}
