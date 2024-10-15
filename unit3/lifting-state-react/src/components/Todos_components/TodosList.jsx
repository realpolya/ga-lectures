import './TodosList.css'

function TodosList({ todos }) {

    return (
    <>
        <div className='todos-list'>
            <h3>Todos List</h3>
            <ul>
                {todos.map((todo, i) => {
            
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