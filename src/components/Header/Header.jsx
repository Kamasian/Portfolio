import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import Image from "../../components/Image/Image"
import Logo from "/assets/img/Logo.webp"

export default function Header() {
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header>
            <nav>
                <div className="menu-button" onClick={toggleMenu}>
                    <div className={`bar ${menuOpen ? "open" : ""}`}></div>
                    <div className={`bar ${menuOpen ? "open" : ""}`}></div>
                    <div className={`bar ${menuOpen ? "open" : ""}`}></div>
                    <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
                        <li>
                            <a href="#mainHome" className="linkWelcomeMobile">
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href="#mainOeuvres" className="linkWorksMobile">
                                Œuvres
                            </a>
                        </li>
                        <li>
                            <a href="#mainContact" className="linkContactMobile">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <Link to="/">
                    <Image
                        src={Logo}
                        alt="Logo" />
                </Link>
                <h1>Portfolio</h1>
                <ul className={`nav-list-desktop ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link
                            className={`linkWelcome ${location.pathname === "/" ? "active" : ""}`}
                            to="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`linkWorks ${location.pathname === "/oeuvres" ? "active" : ""}`}
                            to="/oeuvres">
                            Œuvres
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`linkContact ${location.pathname === "/contact" ? "active" : ""}`}
                            to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}