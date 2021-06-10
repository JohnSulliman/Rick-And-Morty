import React from 'react';
import {Link} from 'react-router-dom'

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.id = parseInt(props.match.params.id);

        this.state = {
            isLoaded: false,
            char: {}
        }
    }

    render() {
        const { isLoaded, char} = this.state;

        if (!isLoaded) {
            return (
                <div className='info'>
                    Carregando...
                </div>
            )
        }
        else {
            return(
                <section className='info'>
                    <div className='info__header'>
                        <h1>{char.name}</h1>    
                    </div>
                    <div className='info__body'>
                        <div className='info__block__img'>
                            <img src={char.image} alt={char.name} className='info__body__img' />
                        </div>
                        <div className='info__block__status'>
                            <p><strong>Status:</strong> {`${char.status}`}</p>
                            <p><strong>Species:</strong> {`${char.species}`}</p>
                        </div>
                    </div>
                    <footer className='info__footer'>
                        <Link to='/' className='info__footer__link'>Voltar</Link>
                    </footer>
                </section>
            );
        }
    }

    componentDidMount() {
        fetch(`https://rickandmortyapi.com/api/character/${this.id}`)
        .then(resultado => resultado.json())
        .then(resultadoJson =>{
            this.setState({
                isLoaded: true,
                char: resultadoJson
            })
        }) 
    }
}


export default Info;