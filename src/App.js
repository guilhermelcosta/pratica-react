import './App.css';
import Pessoa from './components/Pessoa';
import Evento from './components/Evento';
import Formulario from './components/Formulario';

function App() {
    return (
        <div className="App">
            <Pessoa nome="Guilherme" anoNascimento={1900} profissao="Eng. Software"/>
            <Evento nome="Guilherme 2"></Evento>
            <Formulario/>
        </div>
    );
}

export default App;