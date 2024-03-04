import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'
import { Repository } from 'typeorm'
import { Task } from './entities/task.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { title } from 'process'

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto, id: number) {
    const isExist = await this.taskRepository.findBy({
      user: { id },
      title: createTaskDto.title,
    })

    if (isExist.length) throw new BadRequestException('This task already exist')

    const newTask = {
      title: createTaskDto.title,
      user: {
        id,
      },
      details: createTaskDto.details,
      isCompleted: createTaskDto.isCompleted,
      inProcess: createTaskDto.inProcess,
    }
    return await this.taskRepository.save(newTask)
  }

  async findAll(id: number) {
    return await this.taskRepository.find({
      where: {
        user: { id },
      },
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
