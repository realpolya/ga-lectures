import { useState } from 'react';
import TodosList from './Todos_components/TodosList.jsx';
import NewTodoForm from './Todos_components/NewTodoForm.jsx';

function Todos() {
    
    const [todos, setTodos] = useState([]);
    const addTodo = newTodo => {
        console.log(newTodo);
        setTodos([...todos, newTodo]);
    }

    return (
    <div className='todos'>
        < NewTodoForm addTodo={addTodo}/>
        < TodosList todos={todos}/>
    </div>
  )

}

export default Todos