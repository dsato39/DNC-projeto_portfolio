import styles from './ButtonA.module.css'

function ButtonA ({text, link}) {
    return (
        <div className={styles.btn}>
            <a href={link}>
                <button>{text}</button>
            </a>
        </div>
    )
}

export default ButtonA