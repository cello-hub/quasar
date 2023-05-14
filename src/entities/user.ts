import BaseEntity from './base'
import { Entity, Column } from 'typeorm'

@Entity()
export default class User extends BaseEntity {
  @Column({
    nullable: false,
    unique: true,
    comment: '用户名'
  })
  username: string

  @Column({
    nullable: false,
    comment: '密码'
  })
  password: string
}
