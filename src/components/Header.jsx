import reactLogo from '../assets/react.svg'
import './Header.css'

function Header() {
    return(
        <section id='header'>
            <img className='spin' src={reactLogo} alt="React Logo" />
            <ul className='nav-links'>
                <li>About us</li>
                <li>Contact</li>
                <li>Projects</li>
            </ul>
        </section>
    )
}

export default Header;
