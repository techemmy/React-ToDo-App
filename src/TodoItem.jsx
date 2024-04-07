import * as PropTypes from "prop-types";
import React from "react";

export function TodoItem({ name, state = false, todoId, onDelete }) {
  const [todoState, setTodoState] = React.useState(state);
  const todoItem = React.useRef()

  const updateState = () => {
    setTodoState(!todoState);
  }

  const deleteTodoItem = () => {
    onDelete(todoId);
  }

  return (
    <div ref={todoItem} className="todo">
      <input
        onChange={updateState}
        type="checkbox"
        id={`todoItem-${todoId}`}
        checked={todoState}
      />
      <label htmlFor={`todoItem-${todoId}`}>{name}</label>
      <i onClick={deleteTodoItem} className="material-icons delete-icon">&#xe872;</i>
    </div>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.bool,
  todoId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}
