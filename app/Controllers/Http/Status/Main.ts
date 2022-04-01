import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import {UpdateValidator} from 'App/Validators/Status'
import {Status, Subtask, Task} from 'App/Models'

export default class TaskController {

  public async index({}: HttpContextContract) {
    return await Status.all()
  }

  public async updateTask({request,params}: HttpContextContract) {

    const data = await request.validate(UpdateValidator)

    const task = await Task.findOrFail(params.id)

    await task.merge(data).save()

    return task

  }

  public async updateSubtask({request,params}: HttpContextContract) {

    const data = await request.validate(UpdateValidator)

    const subtask = await Subtask.findOrFail(params.id)

    await subtask.merge(data).save()

    return subtask

  }


}
