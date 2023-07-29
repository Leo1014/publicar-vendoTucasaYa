import "./NavBar.css"

export default function NavBar(){
    return(
        <header className="header">
            <img className="logo" src="https://i.ibb.co/yf6bhG6/Logo-Casa-Def.png" />
            <ul className="menu">
                <li>Acerca de Mi</li>
                <li>Mision</li>
                <li>Vision</li>
            </ul>
        </header>
    )
}