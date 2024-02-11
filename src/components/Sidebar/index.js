import './index.scss'
import Logo_P from '../../assets/images/icons8-letter-p-100.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
    return (
        <div className='nav-bar'>
            <div className='img-sublogo'>
                    <Link className='logo' to='/'>
                        <img src={Logo_P} alt='main-logo-P' />
                        <p className='sublogo'>Pranay Byreddy</p> 
                    </Link>
            </div>
            <nav>
                <NavLink exact="true" activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/pranaybyreddy/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/preddybreddy"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://youtube.com"
                    >
                        <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}