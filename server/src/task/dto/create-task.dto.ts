import { IsNotEmpty, IsOptional } from 'class-validator'
import { User } from 'src/user/entities/user.entity'

export class CreateTaskDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  details: string

  @IsOptional()
  inProcess: Boolean

  @IsOptional()
  isCompleted: Boolean

  @IsNotEmpty()
  user: User
}
