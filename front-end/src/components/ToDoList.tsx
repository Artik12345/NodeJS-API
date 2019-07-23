import React from 'react';
import { ToDoItem } from '../services/interfaces/ToDoItem'
import { toDoApi } from '../services/services'
import ToDoCard from './ToDoCard'

interface ToDoListProps { }

interface ToDoListState {
	toDoList: ToDoItem[],
}

export class ToDoList extends React.Component<ToDoListProps, ToDoListState> {

	constructor(props: ToDoListProps) {
		super(props)
		this.state = {
			toDoList: []
		} as ToDoListState
	}

	componentWillMount() {
		toDoApi.getToDoList()
			.then(res => {
				this.setState({toDoList: res})
			})
	}

	render() {
		const { toDoList } = this.state
		return (
			<div className="todolist">
				{!!toDoList.length && toDoList.map(item => {
					return (
						<ToDoCard toDo={item}></ToDoCard>
					)
				})}
			</div>
		)
	}
}

export default ToDoList;
