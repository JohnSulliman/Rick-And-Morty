import React from 'react';
import Card from './Card';

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: []
        };
    }

    listarPokemons() {
        const novosPokemons = [
            {
                'id': '00' + 1,
                'name': 'Bulbasaur',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
                'types': ['Grass', 'Poison']
            },

            {
                'id': '00' + 2,
                'name': 'Ivysaur',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
                'types': ['Grass', 'Poison']
            },

            {
                'id': '00' + 3,
                'name': 'Venusaur',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
                'types': ['Grass', 'Poison']
            },

            {
                'id': '00' + 4,
                'name': 'Charmander',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
                'types': ['Fire']
            },

            {
                'id': '00' + 5,
                'name': 'Charmeleon',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
                'types': ['Fire']
            },

            {
                'id': '00' + 6,
                'name': 'Charizard',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
                'types': ['Fire', 'Flying']
            },
            
            {
                'id': '00' + 7,
                'name': 'Squirtle',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
                'types': ['Water']
            },
            
            {
                'id': '00' + 8,
                'name': 'Wartortle',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
                'types': ['Water']
            },
            
            {
                'id': '00' + 9,
                'name': 'Blastoise',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
                'types': ['Water']
            },
        ];
        
        this.setState({
            pokemons: novosPokemons
        });
    }

    criarCardsPokemon() {
        return this.state.pokemons.map((pokemon) => {
            return <Card pokemon = {pokemon} key = {pokemon.id} />
        });
    }

    render() {
        return(
            <div>
                <div className='card-list'>
                    {this.criarCardsPokemon()}
                </div>
                <button onClick={() => this.listarPokemons()}>
                    Listar Pokemons
                </button>
            </div>

        );
    }
}

export default CardList;