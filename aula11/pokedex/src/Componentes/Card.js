import React from 'react';
import {Link} from 'react-router-dom'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {}
        }

        this.state = {
            pokemon: {
                'id': -1,
                'name': '',
                'image': '',
                'types': []
            }
        }
    }

    criarListaTipos() {
        return this.state.pokemon.types.map((type) => {
            return <span className={type} key={type}>{type}</span>
        })
    }

    render(){
        const pokemon = this.state.pokemon

        return(
            <Link to={`/pokemon/${pokemon.id}`}>
                <div className='card'>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <div className='card-info'>
                        <p className='card-id'>Nº {pokemon.id}</p>
                    </div>
                    <h5>{pokemon.name}</h5>
                    <div className='card-type'>
                        {this.criarListaTipos()}
                    </div>
                </div>
            </Link>
        );
    }

    componentDidMount() {
        this.setState({
            pokemon: this.props.pokemon
        })
    }
    
}

export default Card;