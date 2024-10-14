import { useState } from 'react';
import './App.css';
import ExampleComponent from '../ExampleComponent/ExampleComponent.jsx';

let modeIndex = 0;
console.log('loaded');


function App() {
  // const [count, setCount] = useState(0) 
  // useState = hook is a special function
  // [variable to hold data, function that manages that variable]

  const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState('light');

  const modes = ['light', 'dark', 'pink', 'neon'];

  const [person, setPerson] = useState({
    firstName: 'Polya',
    lastName: 'Stepa',
    hasPets: false,
    age: 27
  })

  return (
    <>
      <div className={darkMode ? 'dark' : 'light'}>
        <h1>Hello world!</h1>
        <p>Hello, my name is {person.firstName} {person.lastName}</p>
        <p>I am {person.age} years old and I {person.hasPets ? 'have' : "don't have"} pets</p>
      </div>
      <div id='buttons' className={mode}>
          <h1>Button div</h1>
          <div id='buttons-click'>
            <button onClick={()=>{setDarkMode(false)}}>Light mode for Hello World</button>
            <button onClick={()=>{setDarkMode(true)}}>Dark mode for Hello World</button>
            <button onClick={() => {
              
              setMode(modes[modeIndex]);
              console.log(modeIndex, modes.length);
              modeIndex++;
              if (modeIndex === modes.length) {
                console.log('reached');
                modeIndex = 0;
              }

            }}>Change mode for buttons</button>
          </div>
      </div>
      < ExampleComponent />
    </>
  );
}

export default App
