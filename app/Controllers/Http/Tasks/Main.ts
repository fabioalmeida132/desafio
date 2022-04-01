import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import {StoreValidator, UpdateValidator} from 'App/Validators/Task'
import {Task} from 'App/Models'

export default class TaskController {

  public async show({params}: HttpContextContract) {

    const tasks = await Task.query().where('boardId', params.id)

    return tasks
  }

  public async store({request}: HttpContextContract) {

    const data = await request.validate(StoreValidator)

    return await Task.create(data)

  }

  public async update({request,params}: HttpContextContract) {

    const data = await request.validate(UpdateValidator)

    const task = await Task.findOrFail(params.id)

    await task.merge(data).save()

    return task

  }

  public async destroy({params}: HttpContextContract) {

    const task = await Task.findOrFail(params.id)

    await task.delete()

  }

}
