import React from 'react';
import Card from './Card'

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chars: []
        };
    }

    listarChars() {
        const novosChars = [
            {
                'id': 1,
                'name': 'Rick Sanchez',
                'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                'status': 'Alive',
                'species':'Human',
            },

            {
                'id': 2,
                'name': 'Flower Morty',
                'image': 'https://rickandmortyapi.com/api/character/avatar/476.jpeg',
                'status': 'Alive',
                'species':'Human',
            },

            {
                'id': 3,
                'name': 'Cynthia',
                'image': 'https://rickandmortyapi.com/api/character/avatar/87.jpeg',
                'status': 'Dead',
                'species': 'Alien',
            },

            {
                'id': 4,
                'name': 'Donna Gueterman',
                'image': 'https://rickandmortyapi.com/api/character/avatar/102.jpeg',
                'status': 'Dead',
                'species': 'Robot',
            },

            {
                'id': 5,
                'name': 'Mechanical Summer',
                'image': 'https://rickandmortyapi.com/api/character/avatar/219.jpeg',
                'status': 'Unknown',
                'species': 'Robot',
            },

            {
                'id': 6,
                'name': 'Journalist Rick',
                'image': 'https://rickandmortyapi.com/api/character/avatar/478.jpeg',
                'status': 'Alive',
                'species': 'Human',
            },

        ];
        
        this.setState({
            chars: novosChars
        });
    }

    criarCardsChar() {
        return this.state.chars.map((char) => {
            return <Card char = {char} key = {char.id} />
        });
    }

    render() {
        return(
                <div className='body'>
                    <header className='header'>
                        <img src='https://w7.pngwing.com/pngs/277/446/png-transparent-rick-and-morty-illustratrion-rick-sanchez-morty-smith-rick-and-morty-season-1-television-show-youtube-rick-and-morty-television-logo-computer-wallpaper-thumbnail.png' width='50' alt='Logo'/>
                    </header>
                    <div className='image'>
                        <img src='https://imagensemoldes.com.br/wp-content/uploads/2021/04/Rick-and-Morty-PNG-1024x435.png' width='800' alt='Rick-And-Morty'/>
                    </div>
                    <div className='rickAndmorty'>
                        <span id='char' onClick={() => this.listarChars()}>Personagens</span>
                    </div>
                    <div className='card-list'>
                        {this.criarCardsChar()}
                    </div>
                </div>

        );
    }
}

export default CardList;