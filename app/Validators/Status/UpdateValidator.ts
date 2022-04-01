import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    statusId: schema.number([
      rules.exists({ table: 'status', column: 'id' }),
    ]),
  })

  public messages = {}
}
