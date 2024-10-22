import { useContext } from 'react';
import { AuthContext } from '../App.jsx';

function Dashboard() {

  const {user} = useContext(AuthContext);
  
  return (
    <div>Welcome {user.username}!!</div>
  )
}

export default Dashboard

