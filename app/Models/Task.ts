import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany, hasOne ,HasOne } from '@ioc:Adonis/Lucid/Orm'
import { Board, Subtask, Status } from 'App/Models'


export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public boardId: number

  @column()
  public statusId: number

  @column()
  public title: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

   /* RELACIONAMENTOS */


  // PERTENCE A UM BOARD
  @belongsTo(() => Board)
  public board: BelongsTo<typeof Board>

  // TEM VÁRIAS SUBTASKS
  @hasMany(() => Subtask)
  public subtasks: HasMany<typeof Subtask>

  // TEM UM STATUS
  @hasOne(() => Status)
  public status: HasOne<typeof Status>

}
