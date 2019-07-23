import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header'
import { routes } from './routes'
import ToDoList from './components/ToDoList'
import './style/scss/main.scss'

interface AppProps { }

export class App extends React.Component {

	constructor(props: AppProps) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="layout">
				<Header />
				<div className="app-wrapper">
					<Switch>
						<Route path={routes.toDoList} component={ToDoList} />
						<Redirect from='/' to={routes.toDoList} />
					</Switch>
				</div>
			</div>
		)
	}
}

export default App;
