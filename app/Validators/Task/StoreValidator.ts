import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    title: schema.string({ trim: true }, [
      rules.maxLength(30),
      rules.required()
    ]),
    description: schema.string.optional({ trim: true },[
      rules.maxLength(255),
    ]),
    boardId: schema.number([
      rules.exists({ table: 'boards', column: 'id' })
    ]),
    statusId: schema.number([
      rules.exists({ table: 'status', column: 'id' })
    ]),
  })

  public messages = {}
}
