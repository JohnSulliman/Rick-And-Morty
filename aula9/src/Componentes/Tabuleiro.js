import React from 'react';
import Quadrado from './Quadrado.js'

class Tabuleiro extends React.Component {
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

export default Tabuleiro;