/* --------------------------------Imports--------------------------------*/
import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Dashboard from './components/Dashboard.jsx'
import Landing from './components/Landing.jsx'
import SignupForm from './components/SignupForm.jsx';
import SigninForm from './components/SigninForm.jsx';
import { getUser, signOut } from './services/auth.js';

/* --------------------------------Variables--------------------------------*/

const AuthContext = createContext(null);

/* --------------------------------Main Function--------------------------------*/


function App() {

  const [user, setUser] = useState(null);

  const handleSignOut = () => {
    signOut();
    setUser(null);
  }

  useEffect(() => {
    const data = getUser();
    setUser(data);
  }, [])

  const contextObject = { user, setUser }

  return (
    <AuthContext.Provider value={contextObject}>
      < NavBar handleSignOut={handleSignOut} />
      <h1>JWT Auth</h1>
      <Routes>
        { user ? (< Route path="/" element={<Dashboard/>} />) : (< Route path="/" element={<Landing />} />)}
        < Route path="/sign-up" element={< SignupForm setUser={setUser}/>} />
        < Route path="/sign-in" element={< SigninForm setUser={setUser}/>} />
      </Routes>
    </AuthContext.Provider>
  )

}

/* --------------------------------Exports--------------------------------*/

export { AuthContext }
export default App
