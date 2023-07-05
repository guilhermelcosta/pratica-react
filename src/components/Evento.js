import Button from './Button';

function Evento({nome}) {

    function meuEvento() {
        alert(`Olá, ${nome}`);
    }

    function segundoEvento() {
        alert("Ativando segundo evento!");
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <Button evento={meuEvento} texto="Disparar!"/>
            <Button evento={segundoEvento} texto="Disparar!"/>
        </>
    )
}

export default Evento;
