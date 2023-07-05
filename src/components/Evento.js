function Evento({nome}) {

    function evento() {
        alert(`Olá, ${nome}`);
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <button onClick={evento}>Ativar</button>
        </>
    )
}

export default Evento;
