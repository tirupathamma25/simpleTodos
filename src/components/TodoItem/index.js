import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onClickDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onClickDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
