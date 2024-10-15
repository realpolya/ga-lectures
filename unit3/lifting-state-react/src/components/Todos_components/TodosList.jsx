import './TodosList.css'

function TodosList({ todos }) {

    return (
    <>
        <div className='todos-list'>
            <h3>Todos List</h3>
            <ul>
                {todos.map((todo, i) => {
                    console.log(todo);
            
                    return <li key={i}>
                        {todo}
                    </li>
                })}
            </ul>
        </div>
    </>
  )

}

export default TodosList