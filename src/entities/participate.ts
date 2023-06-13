import BaseEntity from './base'
import { Entity } from 'typeorm'
import Ecosystem from './ecosystem'

@Entity()
export default class Participate extends BaseEntity {
  ecosystem: Ecosystem
}
