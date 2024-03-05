import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { User } from 'src/user/entities/user.entity'

export class CreateTaskDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  details: string

  @IsNotEmpty()
  @IsString()
  @IsIn(['new', 'inProcess', 'isCompleted'])
  status: 'new' | 'inProcess' | 'isCompleted' = 'new'

  // @IsNotEmpty()
  // user: User
}
