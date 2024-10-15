import './NewTodoForm.css'

function NewTodoForm(props) {
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Creating a new to-do');
    props.addTodo('data created within newTodo');
  }

  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Todo: </label>
      <input id="todoInput" type="text" name="todo" />
      <button type="submit">Create to-do</button>
    </form>
  )
}

export default NewTodoForm