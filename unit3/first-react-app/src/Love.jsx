import './Love.css';

// can only return a single element
// <> used to create a single element if you want
const Love = () => {
    const todos = [
        { text: 'clean', done: true },
        { text: 'cook', done: true },
        { text: 'scrub', done: false },
        { text: 'polish', done: true },

    ];

    const calculate = (a, b) => {
        return a + b;
    }

    const todoList = todos.map((todo, i) => {
        return <li key={i}> {todo.done ? `✓ ${todo.text}` : todo.text }</li>
    });

    // if - else does not work inside return
    // use ternary statement instead

    return (
        <>
            <div className='love'>
                <p>Love to do this:</p>
                <ul>
                    <li>{ todos[0].text }</li>
                    <li>calculate: {calculate(13, 5)}</li>
                    <li>{todos[0].done ? `✓ ${todos[0].text}` : todos[0].text }</li>

                </ul>
            </div>
            <div className='love'>
                <p>To-do next:</p>
                <ul>
                    {todoList}
                </ul>
            </div>
        </>
      )
}

export default Love;