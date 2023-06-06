import BaseEntity from './base'
import { Entity, Column, ManyToOne } from 'typeorm'
import Chain from './chain'

@Entity()
export default class RpcNode extends BaseEntity {
  @ManyToOne(() => Chain, { nullable: false })
  chain: Chain

  @Column({
    nullable: true,
    comment: '公链主网或测试网名称'
  })
  name: string

  @Column({
    comment: 'rpc节点地址'
  })
  rpc_url: string
}
