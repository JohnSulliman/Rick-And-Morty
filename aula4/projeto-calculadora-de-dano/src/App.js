import './App.css';
import orc from './img/orc.png'
import goblin from './img/goblin.png'
import feiticeira from './img/feiticeira.png'
import soco from './img/soco.png';
import arco from './img/arco.png';
import espada from './img/espada.png';
import Inimigos from './Componentes/inimigos.js'
import Armas from './Componentes/armas.js'
import React from 'react';

class Jogo extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      inimigo: '',
      ataque: '',
      mensagem:''
    }
  };
  
  selecionarInimigo(inimigo){
    this.setState({
      inimigo: inimigo
    });
  }
  
  selecionarArma(ataque){
    this.setState({
      ataque: ataque
    });
  }
  
  calcularDano(){
    let forcaAtaque;
    if (this.state.ataque === 'Soco' || this.state.ataque === 'Arco' || this.state.ataque === 'Espada'){
      forcaAtaque = Math.floor(Math.random()*100) + 1;
    }

    let vida;
    if(this.state.inimigo === 'Orc'){
      vida = 80
    }
    else if (this.state.inimigo === 'Goblin'){
      vida = 50
    }
    else if (this.state.inimigo === 'Feiticeira'){
      vida = 35
    }

    let dano = forcaAtaque - vida
    let mensagem;

    if (forcaAtaque === undefined || vida === undefined){
      mensagem = 'Selecione um Personagem e uma Arma'
    }
    else if (forcaAtaque > vida){
      mensagem = `Dano: ${dano}. Parabéns! O ${this.state.inimigo} foi derrotado!`
    }
    else{
      mensagem = `Dano: ${dano}. Você não derrotou o ${this.state.inimigo}. Tente Novamente!`
    }

    this.setState({
      mensagem: mensagem
    })
  }
  
  render() {
    return (
      <div id="fundo">
    <div id="primeira">
      <h1>Calculadora de Dano</h1>
    </div>

    <div id="segunda">
      <h2>Selecione um personagem</h2>
    </div>

      
  <div className="personagem">
    <Inimigos image={orc} name="Orc" marcarSelecionado={(inimigo) => this.selecionarInimigo(inimigo)} marcado={this.state.inimigo === 'Orc'}/>
    <Inimigos image={goblin} name='Goblin' marcarSelecionado={(inimigo) => this.selecionarInimigo(inimigo)} marcado={this.state.inimigo === 'Goblin'}/>
    <Inimigos image={feiticeira} name='Feiticeira' marcarSelecionado={(inimigo) => this.selecionarInimigo(inimigo)} marcado={this.state.inimigo === 'Feiticeira'}/>  
  </div>
  <br/>

  <div id="quarta">
    <h3>Selecione uma arma</h3>
  </div>
  <br/>

  <div className="arma">
    <Armas image={soco} name='Soco' marcarSelecionado={(ataque) => this.selecionarArma(ataque)} marcado={this.state.ataque === 'Soco'}/>
    <Armas image={arco} name='Arco' marcarSelecionado={(ataque) => this.selecionarArma(ataque)} marcado={this.state.ataque === 'Arco'}/>
    <Armas image={espada} name='Espada' marcarSelecionado={(ataque) => this.selecionarArma(ataque)} marcado={this.state.ataque === 'Espada'}/>
  </div>
  <br/>
  
  <div className="sexta">
    <button id="botao" onClick={()=>this.calcularDano()}> 
      Calcular dano 
    </button>
  </div>
  <div id="mensagem">
    {this.state.mensagem}
  </div>
</div> 
    );
  }
}


export default Jogo;
