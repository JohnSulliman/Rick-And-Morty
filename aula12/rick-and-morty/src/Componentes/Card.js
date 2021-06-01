import React from 'react';
import {Link} from 'react-router-dom'

class Card extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            char: {}
        }

        this.state = {
            char: {
                'id': -1,
                'name': '',
                'image': '',
                'status': '',
                'species':'',
            }
        }
    }


    render(){
        const char = this.state.char

        return(
                <Link to={`/char/${char.id}`}>
                    <div className='card'>
                        <img src={char.image} alt={char.name} className='card-image'/>
                        <div className='card-status'>
                            <h1>{char.name}</h1>
                            <span><strong>Status:</strong> {char.status}</span>
                            <span><strong>Species:</strong> {char.species}</span>
                        </div>
                    </div>
                </Link>
        );
    }

    componentDidMount() {
        this.setState({
            char: this.props.char
        })
    }
    
}

export default Card;