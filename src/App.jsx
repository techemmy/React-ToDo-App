import React from "react";
import "./index.css"
import { TodoItem } from "./TodoItem";


function generateId(length = 25) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function App() {
  const [todos, setTodos] = React.useState([])

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.props.todoId !== todoId))
  }

  const addTodo = (event) => {
    event.preventDefault();
    const { todoName: { value: name } } = event.target;
    event.target.todoName.value = "";

    if (name.trim()) {
      const newTodoId = generateId()
      const newTodo = (
        <TodoItem
          key={newTodoId}
          todoId={newTodoId}
          name={name}
          onDelete={deleteTodo}
        />
      )
      setTodos([newTodo, ...todos])
    }
  }

  return (
    <>
      <h1>React ToDo App</h1>
      <main>
        <form onSubmit={addTodo}>
          <input id="todoName" name="todo" className="curved-grey-border" />
          <button>Add Todo</button>
        </form>

        <section className="todos curved-grey-border">
          {todos.map((todo) => (
            <TodoItem
              key={todo.props.todoId}
              name={todo.props.name}
              todoId={todo.props.todoId}
              onDelete={deleteTodo}
            />
          ))}
          <p>{todos.length === 0 ? 'No Todos' : ''}</p>
        </section>
      </main>
    </>
  )
}

export default App
