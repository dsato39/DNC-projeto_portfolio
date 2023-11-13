import styles from './Skills.module.css'
import javascript from '/Users/Daniel Sato/Documents/Programação/DNC/Portfolio/portfolio/src/Image/javascript.svg'
import html5 from '/Users/Daniel Sato/Documents/Programação/DNC/Portfolio/portfolio/src/Image/html5.svg'
import css3 from '/Users/Daniel Sato/Documents/Programação/DNC/Portfolio/portfolio/src/Image/css3.svg'
import react from '/Users/Daniel Sato/Documents/Programação/DNC/Portfolio/portfolio/src/Image/react.svg'

function Skills () {
    return (
        <div className={styles.skills} id='Skills'>
            <h1>Habilidades</h1>
            <h2>Conheça um pouco das minhas principais habilidades e conhecimentos</h2>
            <div>
                <img src={javascript}/>
                <img src={html5}/>
                <img src={css3}/>
                <img src={react}/>
            </div>
        </div>
    )
}

export default Skills