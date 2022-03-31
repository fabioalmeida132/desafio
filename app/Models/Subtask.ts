import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { Task, Status } from 'App/Models'

export default class Subtask extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public taskId: number

  @column()
  public title: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /*  RELACIONAMENTOS */

  // PERTENCE A UMA TASK
  @belongsTo(() => Task)
  public task: BelongsTo<typeof Task>

  // TEM UM STATUS
  @hasOne(() => Status)
  public status: HasOne<typeof Status>

}
