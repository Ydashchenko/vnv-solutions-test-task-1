import { useState } from "react"
import logo from "../media/vnv-logo.png"
import '../styles/header.css'
import videoBackground from '../media/header-background.mp4'
import { Link } from 'react-scroll'

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        const menu = document.querySelector('.nav-items')
        if (menuActive == false) {
            menu.classList.remove("fade-out-to-right")
            menu.classList.add('fade-in')
        }
        if (menuActive == true) {
            menu.classList.remove("fade-in")
            menu.classList.add("fade-out-to-right")
        }
        setTimeout(() => {
            setMenuActive(!menuActive);
        }, 500);
    };
    return (
        <header id="index">
            <nav>
                <img className="main-logo" src={logo} alt="logo" />
                <div className={`nav-items ${menuActive ? 'active' : ''}`}>
                    <Link onClick={() => toggleMenu()} to="projects" smooth={true} duration={1000}>
                        <h2>Projects</h2>
                    </Link>
                    <Link onClick={() => toggleMenu()} to="services" smooth={true} duration={1000}>
                        <h2>Services</h2>
                    </Link>
                    <Link onClick={() => toggleMenu()} to="contacts" smooth={true} duration={1000}>
                        <h2>Contacts</h2>
                    </Link>
                </div>
                <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
            <video className="header-video" autoPlay muted loop playsInline src={videoBackground} type="video/mp4"></video>
            <h1 className="main-heading">
                Easy, quality, IT -
                <br />
                <b>w</b>
                inning
                <b> solutions</b>
                <br />
                 for your business
            </h1>
            <button className="order-button">Order</button>
        </header>
    )
}