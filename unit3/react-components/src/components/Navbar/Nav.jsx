import './Nav.css'

const Nav = () => {

    const links = [
        { text: "Home", source: "./" },
        { text: "About", source: "./" },
        { text: "Market", source: "./" },
        { text: "Creator", source: "./" }
    ]

    const createLinks = links => {
        return links.map(link => <li className="navbar-li"><a className="lia" src={link}> {link.text} </a></li>);
    }
    

    return (
        <>
            <div className="navbar-div">
                <ul className="navbar-list">
                    {createLinks(links)}
                </ul>
            </div>
        </>
    )

}

export default Nav