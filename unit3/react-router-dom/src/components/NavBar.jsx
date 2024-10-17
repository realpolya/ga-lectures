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
                <Link to='/pokemon'>Pokemon</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar