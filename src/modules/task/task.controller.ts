import { Controller, Post, Body } from '@nestjs/common'
import { TaskService } from './task.service'
import Task from '../../entities/task'
import { SaveTaskDto } from './dto/save-task.dto'

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  save(@Body() saveTaskDto: SaveTaskDto) {
    return this.taskService.save(saveTaskDto)
  }

  @Post('expired')
  findExpired(@Body() task: Task) {
    return this.taskService.findExpiredTask(task)
  }

  @Post('today')
  findToday(@Body() task: Task) {
    return this.taskService.findTodayTask(task)
  }
  @Post('future')
  findFuture(@Body() task: Task) {
    return this.taskService.findFutureTask(task)
  }

  @Post('list')
  findAll(@Body() task: Task) {
    return this.taskService.findAll(task)
  }
}
