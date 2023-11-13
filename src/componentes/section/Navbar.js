import styles from './Navbar.module.css'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar () {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/dsatooo/' target='blank'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/dsato39' target='blank'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/daniel-yukitoshi-sato-b2046454/' target='blank'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar