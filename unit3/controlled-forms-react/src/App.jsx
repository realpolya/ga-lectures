import { useState } from 'react'
import './App.css'

function App() {

  /* chapter 1 */
  const [cityInput, setCityInput] = useState('');
  const handleChange = e => setCityInput(e.target.value);

  /* chapter 2 */
  const [title, setTitle] = useState('Name shall appear');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  const handleFormData = e => setFormData({...formData, [e.target.name]: e.target.value });
  const handleTitle = (formData) => setTitle(`Your name: ${formData.firstName} ${formData.lastName}`);
  
  const handleSubmit = e => {

    // prevent navigation away from the page
    e.preventDefault();
    console.log("handling submit");

    // update title
    handleTitle(formData);

    // clear formData
    setFormData({firstName:'', lastName:''});

  }
 
  return (

    <>
      <div>

        <div className="first">
          <h1>Chapter 1</h1>
          <label htmlFor='cityInput'> City: </label>
          <input
            id='cityInput'
            name='cityInput'
            type='text'
            value={cityInput}
            onChange={handleChange}
          />
        </div>

        <div className="second">
          <h1>Chapter 2</h1>
          <h2>{title}</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor='firstName'>First Name: </label>
            <input id='firstName' name='firstName' 
              value={formData.firstName} onChange={handleFormData}/>

            <label htmlFor='lastName'>Last Name: </label>
            <input id='lastName' name='lastName' 
              value={formData.lastName} onChange={handleFormData}/>

            <button type='submit'>Submit your name</button>
          </form>
        </div>

      </div>

    </>

  )

}

export default App
