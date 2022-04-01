import Route from '@ioc:Adonis/Core/Route'

Route.get('/boards', 'Boards/Main.index')

Route.post('/board', 'Boards/Main.store')

Route.put('/board/:id', 'Boards/Main.update')

Route.delete('/board/:id', 'Boards/Main.destroy')
