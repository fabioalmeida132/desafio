import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import {StoreValidator, UpdateValidator} from 'App/Validators/Board'
import {Board} from 'App/Models'

export default class BoardController {

  public async index({}: HttpContextContract) {
    const boards = await Board.all()
    return boards
  }

  public async store({request}: HttpContextContract) {

    const data = await request.validate(StoreValidator)

    return await Board.create(data)

  }

  public async update({request,params}: HttpContextContract) {

    const data = await request.validate(UpdateValidator)

    const board = await Board.findOrFail(params.id)

    await board.merge(data).save()

    return board

  }

  public async destroy({params}: HttpContextContract) {

    const board = await Board.findOrFail(params.id)

    await board.delete()

  }

}
