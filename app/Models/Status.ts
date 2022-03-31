import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { StatusTypes } from 'App/Utils'

export default class Status extends BaseModel {

  public static table = 'status'

  @column({ isPrimary: true })
  public id: number

  @column()
  public status: StatusTypes

}
