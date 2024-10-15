import { useState } from 'react';
import './NewTodoForm.css'

function NewTodoForm(props) {

  const [newTodo, setNewTodo] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Creating a new to-do');
    props.addTodo(newTodo);
    setNewTodo('');
  }

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  }

  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Todo: </label>
      <input id="todoInput" 
        type="text" 
        name="todo"
        autoFocus
        value={newTodo}
        onChange={handleChange} />
      <button type="submit">Create to-do</button>
    </form>
  )

}

export default NewTodoForm