import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteTodo = deleteId => {
    const {todosList} = this.state
    const updatedTodoList = todosList.filter(
      eachTodo => eachTodo.id !== deleteId,
    )
    this.setState({todosList: updatedTodoList})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="container">
        <ul className="un-ordered-card">
          <h1 className="heading">Simple Todos</h1>
          {todosList.map(eachItem => (
            <TodoItem
              todoDetails={eachItem}
              key={eachItem.id}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
