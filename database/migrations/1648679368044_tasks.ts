import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tasks extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('board_id').unsigned().references('boards.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('status_id').unsigned().references('status.id')

      table.string('title', 30).notNullable()
      table.string('description', 255)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
