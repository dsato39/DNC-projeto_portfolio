import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation () {
    return (
        <div className={styles.presentation} id='Presentation'>
            <h2>Bem vindo ao meu portfólio!</h2>
            <h1>Olá, eu sou o Daniel Sato</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras. Como Product Manager, eu tenho o compromisso de resolver problemascomplexos e trazer resultados excepcionais para os negócios.Meus projetos já geraram milhões de reais em receita anualestou sempre em busca de novos desafios para superar.</p>
            <ButtonA link='https://www.linkedin.com/in/daniel-yukitoshi-sato-b2046454/' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation