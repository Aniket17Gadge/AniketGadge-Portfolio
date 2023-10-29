import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logos.svg'
import LogoW from '../../assets/images/logow.svg'
import LogoSubtitle from '../../assets/images/logosub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCogs, faEnvelope, faHome, faUser, faProjectDiagram, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (

        <div className="nav-bar">
            <Link className='logo' onClick={() => setShowNav(false)} to='/'>
                <img className='logo' src={LogoW} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="Ag" />
            </Link>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/About" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="skills-link" to="/Skills" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faCogs} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects-link" to="/Projects" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/Contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />


            </nav>


            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/aniket-gadge-3b146b235/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"   className="anchor-icon" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/Aniket17Gadge'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"   className="anchor-icon" />
                    </a>
                </li>

            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' />

        </div >
    )
}

export default Sidebar