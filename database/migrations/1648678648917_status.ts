import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { statusTypes } from 'App/Utils'

export default class Status extends BaseSchema {
  protected tableName = 'status'

  public async up () {

    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enu('status', statusTypes).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
