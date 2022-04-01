import Route from '@ioc:Adonis/Core/Route'

Route.get('/status', 'Status/Main.index')

Route.put('/task/status/:id', 'Status/Main.updateTask')

Route.put('/subtask/status/:id', 'Status/Main.updateSubtask')

