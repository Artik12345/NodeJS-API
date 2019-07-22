import Express from 'express'
import { MongoClient } from 'mongodb'
import BodyParser from 'body-parser'
import DB from './config/db.mjs'
import path from 'path'


const App = Express()
const port = 8000
global.appRoot = path.resolve(__dirname +'/app')

App.use(BodyParser.urlencoded({ extended: true }));
console.log(DB.url)
MongoClient.connect(DB.url, { useNewUrlParser: true }, (err, client) => {
	if (err) {
		console.log('ERROR ---> ', err)
	}
	require('./app/routes/index.mjs')(App, client.db('to-do_database'))
	App.listen(port, () => {
		console.log('We are live on ', port)
	})
})


