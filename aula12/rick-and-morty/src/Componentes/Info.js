import React from 'react';
import {Link} from 'react-router-dom'

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.id = parseInt(props.match.params.id);

        this.state = {
            char: {
                'id': -1,
                'name': '',
                'image': '',
                'status': '',
                'species':'',
            }
        }

        this.char = {
            1: {
                'id': 1,
                'name': 'Rick Sanchez',
                'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                'status': 'Alive',
                'species':'Human',
            },

            2:{
                'id': 2,
                'name': 'Flower Morty',
                'image': 'https://rickandmortyapi.com/api/character/avatar/476.jpeg',
                'status': 'Alive',
                'species':'Human',
            },

            3:{
                'id': 3,
                'name': 'Cynthia',
                'image': 'https://rickandmortyapi.com/api/character/avatar/87.jpeg',
                'status': 'Dead',
                'species': 'Alien',
            },

            4:{
                'id': 4,
                'name': 'Donna Gueterman',
                'image': 'https://rickandmortyapi.com/api/character/avatar/102.jpeg',
                'status': 'Dead',
                'species': 'Robot',
            },

            5:{
                'id': 5,
                'name': 'Mechanical Summer',
                'image': 'https://rickandmortyapi.com/api/character/avatar/219.jpeg',
                'status': 'Unknown',
                'species': 'Robot',
            },

            6:{
                'id': 6,
                'name': 'Journalist Rick',
                'image': 'https://rickandmortyapi.com/api/character/avatar/478.jpeg',
                'status': 'Alive',
                'species': 'Human',
            },

        }
    }

    render() {
        const char = this.state.char;
        return(
            <section className='info'>
                <div className='info-header'>
                    <h1>{char.name}</h1>    
                </div>
                <div className='info-body'>
                    <div className='info-block'>
                        <img src={char.image} alt={char.name} id='image' />
                    </div>
                    <div className='info-block'>
                        <p><strong>Status:</strong> {`${char.status}`}</p>
                        <p><strong>Species:</strong> {`${char.species}`}</p>
                    </div>
                </div>
                <footer className='info-footer'>
                    <Link to='/'>Voltar</Link>
                </footer>
            </section>
        );
    }

    componentDidMount() {
        let char = this.char[this.id];
        if (char) {
            this.setState({
                char: char
            })
        }
    }
}


export default Info;