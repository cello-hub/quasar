import { TopicEnum } from 'src/constants/chains'
import BaseEntity from './base'
import { Entity, Column } from 'typeorm'

@Entity()
export class Chain extends BaseEntity {
  @Column({
    nullable: false,
    unique: true,
    type: 'enum',
    enum: TopicEnum,
    comment: '公链名称'
  })
  topic: string

  @Column({
    unique: true,
    comment: 'Chain ID'
  })
  chain_id: number

  @Column({
    unique: true,
    comment: 'Hex Chain ID'
  })
  hex_chain_id: string

  @Column({
    comment: '货币符号'
  })
  symbol: string

  @Column({
    comment: '区块浏览器链接'
  })
  explorer: string
}
