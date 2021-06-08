import React from 'react';
import Card from './Card'

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            chars: []
        };
    }

    criarCardsChar() {
        return this.state.chars.map((char) => {
            return <Card char = {char} key = {char.id} />
        });
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
                            <span id='char' /*onClick={() => this.listarChars()*/>Personagens</span>
                        </menu>
                        <div className='body__card-list'>
                            {this.criarCardsChar()}
                        </div>
                    </div>
    
            );
        }
    }

    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character")
        .then(resultado => resultado.json())
        .then(resultadoJson =>{
            this.setState({
                isLoaded: true,
                chars: resultadoJson.results
            })
        });
    }       
}

export default CardList;