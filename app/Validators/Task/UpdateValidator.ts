import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    title: schema.string.optional({ trim: true }, [
      rules.maxLength(30),
    ]),
    description: schema.string.optional({ trim: true },[
      rules.maxLength(255),
    ]),
    statusId: schema.number.optional([
      rules.exists({ table: 'status', column: 'id' })
    ]),
  })

  public messages = {}
}
