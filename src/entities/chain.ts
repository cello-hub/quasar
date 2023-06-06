import BaseEntity from './base'
import { Entity, Column } from 'typeorm'

@Entity()
export default class Chain extends BaseEntity {
  @Column({
    nullable: false,
    unique: true,
    comment: '公链名称'
  })
  topic: string

  @Column({
    comment: 'Chain ID'
  })
  chain_id: number

  @Column({
    comment: 'Hex Chain ID'
  })
  hex_chain_id: string

  @Column({
    comment: '货币符号'
  })
  symbol: string

  @Column({
    nullable: true,
    comment: 'rpc 阶段'
  })
  rpc_url: string

  @Column({
    default: false,
    comment: 'evm兼容'
  })
  evm: boolean

  @Column({
    default: false,
    comment: '测试网'
  })
  testnet: boolean

  @Column({
    nullable: true,
    comment: '区块浏览器链接'
  })
  explorer: string
}
