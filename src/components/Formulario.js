import {useState} from 'react';

function Formulario() {

    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();

    function cadastrarUsuario(e) {
        e.preventDefault();
        alert(`${nome} cadastrado, senha: ${senha}!`);
    }

    return (
        <div className="formulario">
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <input type="text" onChange={(e) => setNome(e.target.value)}  placeholder={'Digite o seu nome'}/>
                <br/>
                <input type="password" onChange={(e) => setSenha(e.target.value)} placeholder={'Digite a sua senha'}/>
                <br/>
                <input type="submit" value={'Cadastrar'}/>
            </form>
        </div>
    )
}

export default Formulario;