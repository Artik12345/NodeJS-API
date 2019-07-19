import React, {Component} from 'react'
import {render} from 'react-dom'
import '../scss/main.scss'

export default class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentWillMount() {
        //load todos array
    }

    render() {
        return (
            <div className="todolist-wrapper">
                
            </div>
        )
    }

}