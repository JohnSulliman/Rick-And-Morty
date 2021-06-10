import React from 'react';
import Card from './Card'
import SearchBox from './SearchBox';

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            chars: []
        };
    }

    API(nome) {
        nome = nome ? nome: ''

        fetch(`https://rickandmortyapi.com/api/character/?name=${nome}`)
        .then(resultado => resultado.json())
        .then(resultadoJson =>{
            this.setState({
                isLoaded: true,
                chars: resultadoJson.results
            })
        });
    }

    criarCardsChar() {
        const personagem = this.state.chars
        
        if(personagem) {
            return personagem.map((char) => {
                return <Card char = {char} key = {char.id} />
            });
        }
        else {
            <div className='body__card-list'>

            </div>
        }
    }

    Buscar(evento) {
        if (evento.key === 'Enter'){
            const nomePersonagem = evento.target.value
            this.API(nomePersonagem)
        }
    }

    render() {
        const isLoaded = this.state.isLoaded;

        if (!isLoaded) {
            return(
                <div className='body'>
                    Carregando...
                </div>
            );
        }
        else {
            return(
                    <div className='body'>
                        <div className='body__image'>
                            <img src='https://imagensemoldes.com.br/wp-content/uploads/2021/04/Rick-and-Morty-PNG-1024x435.png' width='800' alt='Rick-And-Morty'/>
                        </div>
                        <menu className='body__personagem'>
                            <span id='char'>Personagens</span>
                        </menu>
                        <SearchBox placeholder='Buscar Personagens...' Buscar={(evento) => this.Buscar(evento)}/>
                        <div className='body__card-list'>
                            {this.criarCardsChar()}
                        </div>
                    </div>
    
            );
        }
    }

    componentDidMount() {
        this.API()
    }       
}

export default CardList;