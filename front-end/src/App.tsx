import React from 'react';
import { toDoApi } from './services/services'
import {ToDoItem} from './services/interfaces/ToDoItem'

interface AppProps {}

interface AppState {
  toDoList: ToDoItem[];
}



export class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props)
    this.state = {
      toDoList: []
    }
  }

  componentWillMount() {
    toDoApi.getToDoList().then(res => {
      this.setState({toDoList: res})
    })
  }

  render() {
    const { toDoList } = this.state
    return (
      <div className="opaaa">
        {!!toDoList.length && toDoList.map(item => {
          return (
            <div>{item.title}</div>
          )
        })}
      </div>
    )
  }
}

export default App;
