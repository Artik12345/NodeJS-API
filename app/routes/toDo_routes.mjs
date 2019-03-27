
const toDoCategories = require(appRoot +'/common/toDoCategories')

export default function(app, db) {
	app.post('/todolist/createToDo.action', (req, res) => {
		const toDo = {
			id: 'hui',
			title: req.body.title,
			description: req.body.description,

		}
		db.collection('ToDoList').insert(toDo, (err, result) => {
			console.log(result)
			if (err) {
				res.send({'error': 'ERRRRRRROOOOOORRR SUKA'})
			} else {
				res.send(result.ops[0])
			}
		})
		// res.send('hello pidor')
	})

}