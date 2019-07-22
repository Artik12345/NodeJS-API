import helmet from 'helmet'
import cors from 'cors'
import toDoRoutes from './toDo_routes.mjs'

module.exports = function(app, db) {
    app.use(helmet())
    app.use(cors())
    toDoRoutes(app, db)
}