import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer () {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/dsatooo/' target='blank'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/dsato39' target='blank'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/daniel-yukitoshi-sato-b2046454/' target='blank'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>dsato39@gmail.com</p>
        </div>
    )
}

export default Footer