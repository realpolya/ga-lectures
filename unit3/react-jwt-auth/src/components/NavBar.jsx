import { Link } from 'react-router-dom';

function NavBar({ user, handleSignOut }) {
    
    const userNav = <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/" onClick={handleSignOut}>Sign Out</Link>
        </li>
    </ul>

    const nav = <ul>
        <li>
            <Link to="/sign-in">Sign In</Link>
        </li>
        <li>
            <Link to="/sign-up">Sign Up</Link>
        </li>
    </ul>

    return (
        <div>
            {user ? userNav : nav}
        </div>
        
    )
}

export default NavBar