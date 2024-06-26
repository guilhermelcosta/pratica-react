import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
    return (
        <BrowserRouter>
            <NavBar/>

            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/empresa" element={<Empresa/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
            </Routes>

            <Footer/>
        </BrowserRouter>
    );
}

export default App;