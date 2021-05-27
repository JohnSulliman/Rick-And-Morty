import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Quadrado(props) {
    return (
      <button className='quadrado' onClick={() => props.funcaoLidaComClique()}>
        {props.valor}
      </button>
    );
}

class Tabuleiro extends React.Component {
  // Extrair a criação do componente filho para uma função auxiliar
  criarQuadrado(indiceDoQuadrado) {
    return (
      <Quadrado funcaoLidaComClique={() => this.props.funcaoCliqueNoQuadrado(indiceDoQuadrado)} valor={this.props.quadrados[indiceDoQuadrado]} />
    );
  }

  render() {
    return (
      <div>
        <div className='linha-tabuleiro'>
          {this.criarQuadrado(0)}
          {this.criarQuadrado(1)}
          {this.criarQuadrado(2)}
        </div>
        <div className='linha-tabuleiro'>
          {this.criarQuadrado(3)}
          {this.criarQuadrado(4)}
          {this.criarQuadrado(5)}
        </div>
        <div className='linha-tabuleiro'>
          {this.criarQuadrado(6)}
          {this.criarQuadrado(7)}
          {this.criarQuadrado(8)}
        </div>
      </div>
    );
  }
}

class Jogo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jogada: 'X',
      quadrados: Array(9).fill(null)
    }
  }
  
  executarClique(indiceDoQuadrado) {
    const novosQuadrados = this.state.quadrados.slice();
    const vencedor = verificaVencedor(novosQuadrados);
    if (novosQuadrados[indiceDoQuadrado] || vencedor) {
      return;
    }
    
    let jogadaAtual = this.state.jogada;
    novosQuadrados[indiceDoQuadrado] = jogadaAtual; 

    let novaJogada;
    if (jogadaAtual === 'O') {
      novaJogada = 'X';
    } else {
      novaJogada = 'O';
    }

    this.setState({
      jogada: novaJogada,
      quadrados: novosQuadrados
    });
  }

  reiniciarJogo() {
    this.setState({
      jogada: 'X',
      quadrados: Array(9).fill(null)
    });
  }

  render() {
    const vencedor = verificaVencedor(this.state.quadrados);
    const empate = !vencedor && !this.state.quadrados.includes(null);

    let estadoDoJogo;
    if (vencedor) {
      estadoDoJogo = `Jogador ${vencedor} foi o vencedor!`;
    } else if (empate) {
      estadoDoJogo = 'Deu velha! Tente novamente!';
    } else {
      estadoDoJogo = `Proxima jogada: ${this.state.jogada}`;
    }

    return (
      <div className='jogo'>
        <div className='tabuleiro'>
          <Tabuleiro funcaoCliqueNoQuadrado={(indiceDoQuadrado) => this.executarClique(indiceDoQuadrado)} quadrados={this.state.quadrados} />
        </div>
        <div className='informacoes-jogo'>
          {estadoDoJogo}
          <br/>
          <button onClick={() => this.reiniciarJogo()}>Reiniciar Jogo</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Jogo />,
  document.getElementById('root')
);

// Verifica se tem um vencedor no jogo
// Retorna o vencedor (X ou O) ou null caso não tenha vencedor
function verificaVencedor(quadrados) {
  const sequenciasVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < sequenciasVencedoras.length; i++) {
    const sequenciaVencedora = sequenciasVencedoras[i];
    const colunaA = sequenciaVencedora[0];
    const colunaB = sequenciaVencedora[1];
    const colunaC = sequenciaVencedora[2];

    if (quadrados[colunaA] && 
      quadrados[colunaA] === quadrados[colunaB] &&
      quadrados[colunaB] === quadrados[colunaC]) {
        return quadrados[colunaA];
      }
  }
  return null;
}
