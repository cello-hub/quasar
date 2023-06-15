import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { TaskService } from './task.service'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'
import Task from '../../entities/task'

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto)
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

  @Get(':id/reverse-finished')
  reverseFinished(@Param('id') id: string) {
    return this.taskService.reverseFinished(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id)
  }
}
