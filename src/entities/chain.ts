import BaseEntity from './base'
import { Entity, Column } from 'typeorm'

@Entity()
export class Chain extends BaseEntity {
  @Column({
    nullable: false,
    unique: true,
    comment: 'Chain ID'
  })
  chain_id: number

  @Column({
    nullable: false,
    comment: '公链名称',
    unique: true
  })
  topic: string
}
