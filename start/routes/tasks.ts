import Route from '@ioc:Adonis/Core/Route'

Route.get('/tasks/:id', 'Tasks/Main.show')

Route.post('/task', 'Tasks/Main.store')

Route.put('/task/:id', 'Tasks/Main.update')

Route.delete('/task/:id', 'Tasks/Main.destroy')
