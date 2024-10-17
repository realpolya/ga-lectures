import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <nav>
        <ul className='nav-bar'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/pokemon'>List of Pokes</Link>
            </li>
            <li>
                <Link to='/new'>New Pokemon</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar