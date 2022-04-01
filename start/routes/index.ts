import Route from '@ioc:Adonis/Core/Route'

import './boards'
import './tasks'
import './subtasks'
import './status'

Route.get('/', ({ response }) => {
  response.send({
    message: 'API is running'
  })
})
