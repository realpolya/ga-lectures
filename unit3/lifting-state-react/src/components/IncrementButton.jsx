import { useState } from 'react'

function IncrementButton(props) {
    
  const [count, setCount] = useState(0);

  const addOne = () => setCount(count + 1); // change to prevCount later
  
  return (
    <button onClick={addOne}>
        Increment
    </button>
  )
}

export default IncrementButton