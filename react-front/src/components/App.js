import React, {Component} from 'react'
import {render} from 'react-dom'
import ToDoList from './todolist/ToDoList'
import '../scss/main.scss'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="main"></div>
        )
    }

}