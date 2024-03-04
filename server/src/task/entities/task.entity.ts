import { User } from 'src/user/entities/user.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Task {
  @PrimaryGeneratedColumn({ name: 'task_id' })
  id: number

  @Column()
  details: string

  @Column()
  title: string

  @Column()
  inProcess: Boolean

  @Column()
  isCompleted: Boolean

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({ name: 'user_id' })
  user: User

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
