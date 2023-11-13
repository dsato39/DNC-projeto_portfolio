import styles from './Cards.module.css'
import ButtonB from '../elements/ButtonB'

function Cards ({img, title, tech, description, repo, site }) {
    return (
        <div className={styles.cards}>
            <a href={site}><img src={img} alt='ERRO'/></a>
            <section>
                <h1>{title}</h1>
                <p><strong>Tecnologias: </strong> {tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse meu repositório' link={repo}/>
            </section>
        </div>
    )
}

export default Cards