import React from 'react';
import Tabuleiro from './Tabuleiro.js'

class Jogo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        jogada: 'X',
        historico: [{
            quadrados: Array(9).fill(null)
        }]
        }
    }

    executarClique(indiceDoQuadrado) {
        const historicoJogadas = this.state.historico;
        const ultimaJogada = historicoJogadas[historicoJogadas.length - 1]
        const novosQuadrados = ultimaJogada.quadrados.slice();
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

        const novoHistorico = historicoJogadas.concat({
        quadrados: novosQuadrados
        });

        this.setState({
        jogada: novaJogada,
        historico: novoHistorico
        });
    }

    reiniciarJogo() {
        this.setState({
        jogada: 'X',
        historico: [{
            quadrados: Array(9).fill(null)
        }]
        });
    }

    criarHistoricoJogada() {
        const listaJogadas = this.state.historico.map((jogada, numJogada) => {
        let textoDoHistorico;
        if (numJogada > 0) {
            textoDoHistorico = `Jogada: ${numJogada}`
        } else {
            textoDoHistorico = 'Reiniciar Jogo'
        }

        return (
            <li key={numJogada}>
            <button onClick={() => this.voltarParaJogada(numJogada)}>{textoDoHistorico}</button>
            </li>
        );
        });
        return listaJogadas;
    }

    voltarParaJogada(numJogada) {
        const novoHistorico = this.state.historico.slice(0, numJogada + 1);
        this.setState({
        historico: novoHistorico
        })
    }

    render() {
        console.log(this.state.historico)
        const jogadaAtual = this.state.historico[this.state.historico.length - 1];
        const vencedor = verificaVencedor(jogadaAtual.quadrados);
        const empate = !vencedor && !jogadaAtual.quadrados.includes(null);

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
            <Tabuleiro funcaoCliqueNoQuadrado={(indiceDoQuadrado) => this.executarClique(indiceDoQuadrado)} quadrados={jogadaAtual.quadrados} />
            </div>
            <div className='informacoes-jogo'>
            {estadoDoJogo}
            <ol>
                {this.criarHistoricoJogada()}
            </ol>
            </div>
        </div>
        );
    }
}

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

export default Jogo;