import styles from '../styles/Pessoa.module.css';
import PropTypes from 'prop-types'; /*para definir tipagem de variaveis*/

function Pessoa({nome, anoNascimento, profissao}) {
    return (
        <>
            <h1 className={styles.tituloPrincipal}>Tudo bem, {nome}?</h1>
            <p>Pelo que eu vi aqui, voce tem {2023 - anoNascimento} anos e é {profissao}</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    )
}

Pessoa.propTypes = {
    nome: PropTypes.string.isRequired,
    anoNascimento: PropTypes.number,
    profissao: PropTypes.string
}

Pessoa.defaultProps = {
    nome: 'Nao informado',
    anoNascimento: 2000,
    profissao: 'Nao informado'
}

export default Pessoa;