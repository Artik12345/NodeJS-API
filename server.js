const
	express = require('express'),
	MongoClient = require('mongodb').MongoClient,
	bodyParser = require('body-parser'),
	db = require('./config/db')

const app = express()
const port = 8000

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, dataBase) => {
	if (err) {
		console.log('ERROR ---> ', err)
	}
	require('./app/routes')(app, dataBase)
	app.listen(port, () => {
		console.log('We are live on ', port)
	})
})


