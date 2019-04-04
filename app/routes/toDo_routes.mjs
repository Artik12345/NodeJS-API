
import {ObjectID} from 'mongodb'
const toDoCategories = require(appRoot +'/common/toDoCategories')

export default function(app, db) {

	app.post('/todolist/createToDo.action', (req, res) => {
		const toDo = {
			title: req.body.title,
			description: req.body.description,
			category: toDoCategories.CategoryOne
		}
		db.collection('ToDoList').insertOne(toDo, (err, result) => {
			console.log(result)
			if (err) {
				res.send({'error': 'error in /todolist/createToDo.action'})
			} else {
				res.send(result.ops[0])
			}
		})
	})

	app.get('/todolist/getToDoById.action/:id', (req, res) => {
		const id = {'_id': new ObjectID(req.params.id)}
		db.collection('ToDoList').findOne(id, (err, result) => {
			if (err) {
				res.send({'error': 'error in /todolist/getToDoById.action/:id'})
			} else {
				res.send(result)
			}
		})
	})

	app.get('/todolist/getToDoList.action', (req, res) => {
		db.collection('ToDoList').find({}).toArray((err, result) => {
			if (err) {
				res.send({'error': 'error in /todolist/getToDoById.action/:id'})
			} else {
				res.send(result)
			}
		})
	})

	app.delete('/todolist/deleteToDoById.action/:id', (req, res) => {
		const id = {'_id': new ObjectID(req.params.id)}
		db.collection('ToDoList').deleteOne(id, (err, result) => {
			if (err) {
				res.send({'error': 'error in /todolist/deleteToDoById.action/:id'})
			} else {
				res.send(result)
			}
		})
	})

	app.put('/todolist/editToDoById.action/:id', (req, res) => {
		const id = {'_id': new ObjectID(req.params.id)}
		const newToDo = {
			title: req.body.title,
			description: req.body.description,
			category: toDoCategories.CategoryOne
		}
		db.collection('ToDoList').updateOne(id, newToDo, (err, result) => {
			if (err) {
				res.send({'error': 'error in /todolist/editToDoById.action/:id'})
			} else {
				res.send(result)
			}
		})
	})

}