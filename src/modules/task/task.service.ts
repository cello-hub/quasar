import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'
import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import Task from '../../entities/task'
import { EcosystemService } from '../ecosystem/ecosystem.service'

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly repository: Repository<Task>,
    private readonly ecosystemService: EcosystemService
  ) {}

  async create(dto: CreateTaskDto) {
    const task = new Task()
    task.name = dto.name
    task.date = new Date(dto.date)
    if (dto.ecosystemId) {
      task.ecosystem = await this.ecosystemService.findOne(dto.ecosystemId)
    }
    task.finished = dto.finished
    task.remark = dto.remark

    return this.repository.save(task)
  }

  findAll(task: Task) {
    return this.repository.find({
      relations: ['ecosystem'],
      where: task
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} task`
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`
  }

  remove(id: number) {
    return `This action removes a #${id} task`
  }
}
