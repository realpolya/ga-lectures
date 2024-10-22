import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Dashboard from './components/Dashboard.jsx'
import Landing from './components/Landing.jsx'
import SignupForm from './components/SignupForm.jsx';
import SigninForm from './components/SigninForm.jsx';

function App() {

  const [user, setUser] = useState(null)

  return (
    <>
      < NavBar user={user} />
      <h1>JWT Auth</h1>
      <Routes>
        { user ? (< Route path="/" element={<Dashboard user={user} />} />) : (< Route path="/" element={<Landing />} />)}
        < Route path="/sign-up" element={< SignupForm setUser={setUser}/>} />
        < Route path="/sign-in" element={< SigninForm setUser={setUser}/>} />
      </Routes>
    </>
  )

}

export default App
