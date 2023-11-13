import styles from './Projects.module.css'
import Cards from '../section/Cards'
import lpdnc from '../../Image/Projects/lpdnc.svg'
import portfolio from '../../Image/Projects/portfolio.svg'

function Projects () {
    return (
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <Cards
            img={lpdnc}
            title="LP - DNC"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de Landing Page"
            repo="https://github.com/dsato39/projeto-landing-page"
            site="https://github.com/dsato39/projeto-landing-page"/>
            <Cards
            img={portfolio}
            title="Portfólio - DNC"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de Portfólio"
            repo="https://github.com/dsato39/projeto-landing-page"
            site="https://github.com/dsato39/projeto-landing-page"/>
        </div>
    )
}

export default Projects