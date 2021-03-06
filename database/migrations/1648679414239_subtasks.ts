import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Subtasks extends BaseSchema {
  protected tableName = 'subtasks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('task_id').unsigned().references('tasks.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('status_id').unsigned().references('status.id')

      table.string('title',30).notNullable()
      table.string('description', 255)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
