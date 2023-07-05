import {useState} from 'react';

function Condicional() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [emailUsuario, setEmailUsuario] = useState();

    function cadastrarEmail(e) {
        e.preventDefault();
        setEmailUsuario(email);
        alert(`E-mail cadastrado com sucesso! E-mail: ${emailUsuario} Senha: ${senha}`);
    }

    function limparEmail() {
        setEmailUsuario('');
    }

    return (
        <div>
            <h1>Cadastro de e-email:</h1>
            <form>
                <label htmlFor="input-nome">E-mail: </label>
                <input id="input-nome" type="text" onChange={(e) => setEmail(e.target.value)}
                       placeholder="Digite o seu e-mail"/>
                <br/>
                <label htmlFor="input-senha">Senha: </label>
                <input id="input-senha" type="password" onChange={(e) => setSenha(e.target.value)}
                       placeholder="Digite a sua senha"/>
                <br/>
                <button onClick={cadastrarEmail}>Cadastrar</button>
            </form>
            {/*Condicional, sendo condicao && -> codigo executado*/}
            {emailUsuario && (
                <div>
                    <p>O seu email é: {emailUsuario} e sua senha é: {senha}</p>
                    <button onClick={limparEmail}>Limpar</button>
                </div>

            )}
        </div>
    );
}

export default Condicional;