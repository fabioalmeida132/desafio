import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import {StoreValidator, UpdateValidator} from 'App/Validators/Subtask'
import {Subtask} from 'App/Models'

export default class SubtaskController {

  public async show({params}: HttpContextContract) {

    const subtasks = await Subtask.query().where('taskId', params.id)

    return subtasks
  }

  public async store({request}: HttpContextContract) {

    const data = await request.validate(StoreValidator)

    return await Subtask.create(data)

  }

  public async update({request,params}: HttpContextContract) {

    const data = await request.validate(UpdateValidator)

    const task = await Subtask.findOrFail(params.id)

    await task.merge(data).save()

    return task

  }

  public async destroy({params}: HttpContextContract) {

    const task = await Subtask.findOrFail(params.id)

    await task.delete()

  }

}
