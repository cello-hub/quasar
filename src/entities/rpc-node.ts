import BaseEntity from './base'
import { Entity, Column, ManyToOne } from 'typeorm'
import { Chain } from './chain'

@Entity()
export class RpcNode extends BaseEntity {
  @ManyToOne((type) => Chain, {
    createForeignKeyConstraints: false
  })
  chain: Chain

  @Column({
    nullable: false,
    comment: '公链主网或测试网名称, Mainnet / Testnet'
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
