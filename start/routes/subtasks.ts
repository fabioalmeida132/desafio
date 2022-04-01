import Route from '@ioc:Adonis/Core/Route'

Route.get('/subtasks/:id', 'Subtasks/Main.show')

Route.post('/subtask', 'Subtasks/Main.store')

Route.put('/subtask/:id', 'Subtasks/Main.update')

Route.delete('/subtask/:id', 'Subtasks/Main.destroy')
