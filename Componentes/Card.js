import React from 'react';
import {Link} from 'react-router-dom'

class Card extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoaded: false,
            char: {}
        }
    }


    render(){
        const { isLoaded, char} = this.state;

        if (!isLoaded) {
            return(
                <div className='card'>
                    Carregando...
                </div>
            )
        }
        else {
            return(
                <Link to={`/char/${char.id}`}>
                    <div className='card'>
                        <img src={char.image} alt={char.name} className='card__image'/>
                        <div className='card__status'>
                            <div className='card__status__name'>
                                <h1>{char.name}</h1>
                            </div>
                            <div className='card__status__info'>
                                <span><strong>Status:</strong> {char.status}</span>
                                <span><strong>Species:</strong> {char.species}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
    }

    componentDidMount() {
        fetch(this.props.char.url)
        .then(resultado => resultado.json())
        .then(resultadoJson =>{
            this.setState({
                isLoaded: true,
                char: resultadoJson
            })
        }) 
    }
    
}

export default Card;