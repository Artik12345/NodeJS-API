import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes'
import { ToDoItem } from '../services/interfaces/ToDoItem'

interface ToDoCardProps {
	toDo: ToDoItem
}

export const ToDoCard = ({ toDo }: ToDoCardProps) => {

	return (
		<div className="todoitem">
			<div className="todoitem__title">
				<NavLink to={routes.toDoById(toDo.id)}>{toDo.title}</NavLink>
			</div>
			<div className="todoitem__description">{toDo.description}</div>
		</div>
	)

}

export default ToDoCard;
