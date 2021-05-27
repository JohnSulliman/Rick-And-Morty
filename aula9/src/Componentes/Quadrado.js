function Quadrado(props) {
    return (
      <button className='quadrado' onClick={() => props.funcaoLidaComClique()}>
        {props.valor}
      </button>
    );
}

export default Quadrado;