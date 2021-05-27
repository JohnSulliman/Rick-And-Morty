import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import orc from './img/orc.png';
import goblin from './img/globin.png';
import feiticeira from './img/feiticeira.png';
import reportWebVitals from './reportWebVitals';

function Criaturas(props) {
  let classCSS = 'criaturas'
if (props.marcado){
  classCSS = 'marcado'
  }
return(
  <div className='criaturas' onClick={() => props.marcarSelecionado(props.name)}>
    <img src={props.imagem} alt="" width='200'/>
    <h5>{props.name}</h5>
  </div>
);
}

class Jogo extends React.Component {
  constructor(props){
    super(props);

    this.state={
      monstro: '',
      ataque: '',
      bordar: ''
    }
  };

  selecionarCriatura(monstro){
    this.setState({
      monstro: monstro
    });
  }

  selecionarArma(ataque){
    this.setState({
      ataque: ataque
    });
  }

  render() {

    return (
      <div id='fundo'>
        <div id ='primeira'>
          <h1>Calculadora de dano</h1>
        </div>

        <div id='segunda'>
          <h2>Selecione um personagem</h2>
        </div>

        <div className='personagem'>
          <Criaturas imagem={orc}/>
          <Criaturas imagem={goblin}/>
          <Criaturas imagem={feiticeira}/>
        </div>

        <div id='quarta'>
          <h2>Selecione uma arma</h2>
        </div>

        <div className='arma'>
        <armas />
        <armas />
        <armas />
        </div>

      </div>
    )
  }
}


ReactDOM.render(
    <Jogo />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
