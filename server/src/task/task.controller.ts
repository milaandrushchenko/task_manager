import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { TaskService } from './task.service'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createTaskDto: CreateTaskDto, @Req() req) {
    return this.taskService.create(createTaskDto, +req.user.id)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.taskService.findAll(+req.user.id)
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id)
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id)
  }
}
