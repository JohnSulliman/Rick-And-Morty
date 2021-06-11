import React from 'react';
import Card from './Card';
import SearchBox from './SearchBox';
import Footer from './Footer'

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            pagina: 1,
            chars: [],
        };
    }

    API() {
        fetch(`https://rickandmortyapi.com/api/character/?page=&name=`)
        .then(resultado => resultado.json())
        .then(resultadoJson =>{
            this.setState({
                isLoaded: true,
                chars: resultadoJson.results
            })
        });
    }

    BuscarNome(evento) {
        if (evento.key === 'Enter'){
            const nome = evento.target.value

            fetch(`https://rickandmortyapi.com/api/character/?page=&name=${nome}`)
            .then(resultado => resultado.json())
            .then(resultadoJson =>{
                this.setState({
                isLoaded: true,
                chars: resultadoJson.results
                })
            });
        }
    }

    LoadChars() {
        const nextPage = this.state.pagina + 1;

        fetch(`https://rickandmortyapi.com/api/character/?page=${nextPage}&nome=`)
        .then(resultado => resultado.json())
        .then(resultadoJson =>{
            if(this.state.chars){
                this.setState({
                    isLoaded: true,
                    pagina: nextPage,
                    chars: this.state.chars.concat(resultadoJson.results),
                })
            }
        });
    }

    createCardsChar() {
        const personagem = this.state.chars
        
        if(personagem) {
            return personagem.map((char) => {
                return <Card char = {char} key = {char.id} />
            });
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
                        <div className='body__background'>
                            <img src='https://imagensemoldes.com.br/wp-content/uploads/2021/04/Rick-and-Morty-PNG-1024x435.png' 
                            className='body__image'
                            width='800' 
                            alt='Rick-And-Morty'/>
                        </div>
                        <menu className='body__personagem'>
                            <span id='char'>Personagens</span>
                        </menu>
                        <SearchBox placeholder='Buscar Personagens...' Buscar={(evento) => this.BuscarNome(evento)}/>
                        <div className='body__card-list'>
                            {this.createCardsChar()}
                        </div>
                        <div className='body__div-botao'>
                            <button className='body__botao' onClick={() => {this.LoadChars()}}>
                                Mais Personagens
                            </button>
                        </div>
                        <Footer />
                    </div>
    
            );
        }
    }

    componentDidMount() {
        this.API()
    }       
}

export default CardList;