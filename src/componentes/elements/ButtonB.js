import styles from './ButtonB.module.css'

function ButtonB ({text, link}) {
    return (
        <div className={styles.btn}>
            <a href={link}>
                <button>{text}</button>
            </a>
        </div>
    )
}

export default ButtonB