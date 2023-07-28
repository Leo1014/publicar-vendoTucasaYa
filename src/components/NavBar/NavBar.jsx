import "./NavBar.css"

export default function NavBar(){
    return(
        <header className="header">
            <img className="logo" src="https://img2.freepng.es/20180330/fce/kisspng-logo-house-roof-clip-art-roof-5abe8cc767b636.4561961215224373194248.jpg" />
            <ul className="menu">
                <li>Acerca de Mi</li>
                <li>Mision</li>
                <li>Vision</li>
            </ul>
        </header>
    )
}