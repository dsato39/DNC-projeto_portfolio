import styles from './Skills.module.css'
import javascript from '../../js.svg'
import html5 from '../../html5.svg'
import css3 from '../../css3.svg'
import react from '../../react.svg'

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