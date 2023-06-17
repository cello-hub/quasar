import { omit, pick, pickBy } from 'lodash'
import { SaveTaskDto } from './dto/save-task.dto'
import {
  Between,
  FindOperator,
  FindOptionsWhere,
  IsNull,
  LessThan,
  MoreThan,
  Repository
} from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import Task from '../../entities/task'
import { EcosystemService } from '../ecosystem/ecosystem.service'
import dayjs from '../../utils/dayjs'
import Ecosystem from '../../entities/ecosystem'

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly repository: Repository<Task>,
    private readonly ecosystemService: EcosystemService
  ) {}

  async save(dto: SaveTaskDto) {
    console.log(dto)

    let task: Task
    if (dto.id) {
      console.log('update')

      let ecosystem: Ecosystem = null
      if (dto.ecosystemId) {
        ecosystem = await this.ecosystemService.findOne(dto.ecosystemId)
      }
      return this.repository.update(dto.id, {
        ...pick(dto, ['name', 'finished', 'remark']),
        ecosystem: ecosystem
      })
    } else {
      task = new Task()
      task.name = dto.name
      task.date = new Date(dto.date)
      if (dto.ecosystemId) {
        task.ecosystem = await this.ecosystemService.findOne(dto.ecosystemId)
      }
      task.finished = dto.finished
      task.remark = dto.remark
    }

    return this.repository.save(task)
  }

  findAll(task: Task) {
    const queryParams: FindOptionsWhere<Task> = task
    if ('date' in task) {
      queryParams.date = task.date ? task.date : IsNull()
    }
    return this.repository.find({
      relations: ['ecosystem'],
      where: queryParams,
      order: {
        date: 'ASC',
        finished: 'ASC'
      }
    })
  }

  findExpiredTask(task: Task) {
    const end = dayjs().subtract(1, 'day').endOf('day').toDate()
    return this.findTaskByDateRange(task, null, end)
  }

  findTodayTask(task: Task) {
    const start = dayjs().startOf('day').toDate()
    const end = dayjs().endOf('day').toDate()
    return this.findTaskByDateRange(task, start, end)
  }

  findFutureTask(task: Task) {
    const todayEnd = dayjs().endOf('day').toDate()
    return this.findTaskByDateRange(task, todayEnd)
  }

  findTaskByDateRange(task: Task, start?: Date, end?: Date) {
    let dateRange: FindOperator<Date>
    if (start && end) {
      dateRange = Between(start, end)
    } else if (start && !end) {
      dateRange = MoreThan(start)
    } else if (!start && end) {
      dateRange = LessThan(end)
    }

    const queryParams: FindOptionsWhere<Task> = task
    queryParams.date = dateRange

    return this.repository.find({
      relations: ['ecosystem'],
      where: queryParams,
      order: {
        finished: 'ASC',
        date: 'ASC'
      }
    })
  }

  async reverseFinished(id: number) {
    const task = await this.findOneById(id)
    task.finished = !task.finished

    return this.repository.save(task)
  }

  findOneById(id: number) {
    return this.repository.findOneBy({ id })
  }
}
