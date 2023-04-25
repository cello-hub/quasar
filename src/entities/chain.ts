import BaseEntity from './base'
import { Entity, Column } from 'typeorm'

@Entity()
export class Chain extends BaseEntity {
  @Column({
    nullable: false,
    unique: true,
    comment: '公链ID'
  })
  chain_id: number

  @Column({
    nullable: false,
    comment: '公链名称'
  })
  topic: string

  @Column({
    nullable: false,
    comment: '公链主网或测试网名称'
  })
  name: string

  @Column({
    default: false,
    comment: '是否为测试网'
  })
  is_mainnet: boolean

  @Column({
    comment: 'rpc节点地址'
  })
  rpc_url: string
}
