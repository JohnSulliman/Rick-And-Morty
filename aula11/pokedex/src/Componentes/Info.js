import React from 'react'
import {Link} from 'react-router-dom'

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.id = parseInt(props.match.params.id);

        this.state = {
            pokemon: {
                'id': -1,
                'name': '',
                'image': '',
                'height': '',
                'weight': '',
                'category': '',
                'abilities': '',
                'evolutions': '',
                'types': [],
                'weaknesses': []
            }
        }

        this.pokemons = {
            1: {
                'id': 1,
                'name': 'Bulbasaur',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
                'height': 0.7,
                'weight': 6.9,
                'category': 'Seed',
                'abilities': 'Overgrow',
                'evolutions': 'Bulbasaur - Ivysaur - Venusaur',
                'types': ['Grass', 'Poison'],
                'weaknesses': ['Fire', 'Psychic', 'Flying', 'Ice']
            },

            2:{
                'id': 2,
                'name': 'Ivysaur',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
                'height': 1.0,
                'weight': 13.0,
                'category': 'Seed',
                'abilities': 'Overgrow',
                'evolutions': 'Bulbasaur - Ivysaur - Venusaur',
                'types': ['Grass', 'Poison'],
                'weaknesses': ['Fire', 'Psychic', 'Flying', 'Ice']
            },

            3: {
                'id': 3,
                'name': 'Venusaur',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
                'height': 2.0,
                'weight': 100.0,
                'category': 'Seed',
                'abilities': 'Overgrow',
                'evolutions': 'Bulbasaur - Ivysaur - Venusaur',
                'types': ['Grass', 'Poison'],
                'weaknesses': ['Fire', 'Psychic', 'Flying', 'Ice']
            },

            4: {
                'id': 4,
                'name': 'Charmander',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
                'height': 0.6,
                'weight': 8.5,
                'category': 'Lizard',
                'abilities': 'Blaze',
                'evolutions': 'Charmander - Charmeleon - Charizard',
                'types': ['Fire'],
                'weaknesses': ['Water', 'Ground', 'Rock']
            },

            5: {
                'id': 5,
                'name': 'Charmeleon',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
                'height': 1.1,
                'weight': 19.0,
                'category': 'Flame',
                'abilities': 'Blaze',
                'evolutions': 'Charmander - Charmeleon - Charizard',
                'types': ['Fire'],
                'weaknesses': ['Water', 'Ground', 'Rock']
            },

            6: {
                'id': 6,
                'name': 'Charizard',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
                'height': 1.7,
                'weight': 90.5,
                'category': 'Flame',
                'abilities': 'Blaze',
                'evolutions': 'Charmander - Charmeleon - Charizard',
                'types': ['Fire', 'Flying'],
                'weaknesses': ['Water', 'Electric', 'Rock']
            },
            
            7: {
                'id': 7,
                'name': 'Squirtle',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
                'height': 0.5,
                'weight': 9.0,
                'category': 'Tiny Turtle',
                'abilities': 'Torrent',
                'evolutions': 'Squirtle - Wartortle - Blastoise',
                'types': ['Water'],
                'weaknesses': ['Grass', 'Electric']
            },
                        
            8: {
                'id': 8,
                'name': 'Wartortle',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
                'height': 1.0,
                'weight': 22.5,
                'category': 'Turtle',
                'abilities': 'Torrent',
                'evolutions': 'Squirtle - Wartortle - Blastoise',
                'types': ['Water'],
                'weaknesses': ['Grass', 'Electric']
            },
                                    
            9: {
                'id': 9,
                'name': 'Blastoise',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
                'height': 1.6,
                'weight': 85.5,
                'category': 'Shellfish',
                'abilities': 'Torrent',
                'evolutions': 'Squirtle - Wartortle - Blastoise',
                'types': ['Water'],
                'weaknesses': ['Grass', 'Electric']
            },
        }
    }

    criarListaTipos() {
        return this.state.pokemon.types.map((type) => {
            return <span className={type} key={type}>{type}</span>
        })
    }

    criarListaFraquesa() {
        return this.state.pokemon.weaknesses.map((weak) => {
            return <span className={weak} key={weak}>{weak}</span>
        })
    }

    render() {
        console.log(this.state)
        const pokemon = this.state.pokemon;
        return(
            <section className='info'>
                <div className='info-header'>
                    {pokemon.name}
                </div>
                <div className='info-body'>
                    <div className='info-block'>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </div>
                    <div className='info-block'>
                        <p><strong>Height:</strong> {`${pokemon.height}m`}</p>
                        <p><strong>Weight:</strong> {`${pokemon.weight}kg`}</p>
                        <p><strong>Category:</strong> {pokemon.category}</p>
                        <p><strong>Abilities:</strong> {pokemon.abilities}</p>
                        <p><strong>Evolutions:</strong> {pokemon.evolutions} </p>
                        <strong>Type:</strong>
                        <div className='info-type'>
                            {this.criarListaTipos()}
                        </div>
                        <strong>Weaknesses:</strong>
                        <div className='info-weak'>
                            {this.criarListaFraquesa()}
                        </div>
                    </div>
                </div>
                <div className='info-footer'>
                    <Link to='/'>Voltar</Link>
                </div>
            </section>
        );
    }

    componentDidMount() {
        let pokemon = this.pokemons[this.id];
        if (pokemon) {
            this.setState({
                pokemon: pokemon
            })
        }
    }
}

export default Info