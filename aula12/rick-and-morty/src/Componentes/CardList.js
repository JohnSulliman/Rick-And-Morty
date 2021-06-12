import React from 'react';
import Card from './Card';
import SearchBox from './SearchBox';
import Footer from './Footer'
import Logo from '../img/Logo.png'
import Rick_and_Morty from '../img/Rick_and_Morty.png'

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.currentPage = 1;
        this.currentName = '';
        this.currentStatus = '';
        this.currentSpecies = '';
        this.state = {
            isLoaded: false,
            chars: [],
        };
    }

    API(page, name, status, species) {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&species=${species}`)
        .then(resultado => resultado.json())
        .then(resultadoJson =>{
            this.setState({
                isLoaded: true,
                chars: resultadoJson.results
            })
        });
    }

    Search(evento) {
        if(evento.key === 'Enter' && evento.target.placeholder === 'Nome'){
            this.currentName = evento.target.value
            this.currentPage = 1
        }
        else if (evento.key === 'Enter' && evento.target.placeholder === 'Status'){
            this.currentStatus = evento.target.value
            this.currentPage = 1
        }
        else if (evento.key === 'Enter' && evento.target.placeholder === 'Espécie') {
            this.currentSpecies = evento.target.value
            this.currentPage = 1
        }


        this.API(this.currentPage, this.currentName, this.currentStatus, this.currentSpecies)
    }

    LoadChars() {
        const nextPage = this.currentPage + 1;
        const name = this.currentName
        const status = this.currentStatus
        const species = this.currentSpecies

        fetch(`https://rickandmortyapi.com/api/character/?page=${nextPage}&name=${name}&status=${status}&species=${species}`)
        .then(resultado => resultado.json())
        .then(resultadoJson =>{
            if(this.state.chars){
                this.currentPage = nextPage
                this.setState({
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
                        <header className='body__header'>
                            <a href='https://rickandmortyapi.com/' target='_blanck'>
                                <img src={Logo}
                                className='body__header__logo'
                                width='45px' 
                                alt='rick-and-morty' />
                            </a>
                        </header>
                        <div className='body__background'>
                            <img src={Rick_and_Morty} 
                            className='body__image'
                            width='800' 
                            alt='Rick-And-Morty'/>
                        </div>
                        <menu className='body__personagem'>
                            <span><strong>Personagens</strong></span>
                        </menu>
                        <div className='body__search-box'>
                            <span className='body__search-box__buscar-por'><strong>Buscar por:</strong></span>
                            <SearchBox placeholder='Nome' search={(evento) => this.Search(evento)}/>
                            <SearchBox placeholder='Status' search={(evento) => this.Search(evento)}/>
                            <SearchBox placeholder='Espécie' search={(evento) => this.Search(evento)}/>
                        </div>
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
        this.API(this.currentPage, this.currentName, this.currentStatus, this.currentSpecies)
    }       
}

export default CardList;