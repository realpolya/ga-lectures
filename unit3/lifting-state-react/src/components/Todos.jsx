import { useState } from 'react';
import TodosList from './Todos_components/TodosList.jsx';
import NewTodoForm from './Todos_components/NewTodoForm.jsx';

function Todos(props) {
    console.log('Todos props', props);

    const [newTodo, setNewTodo] = useState('');

    return (
    <div className='todos'>
        < NewTodoForm addTodo={props.addTodo}/>
        < TodosList />
    </div>
  )
}

export default Todos