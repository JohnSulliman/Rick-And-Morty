import {Link} from 'react-router-dom'

function Card() {
    return(
            <div className='card'>
                <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='Rick Sanchez' className='imagem' />
                <div className='info'>
                    <Link to='/char/rick-sanchez' className='nome'>
                            <h1>Rick Sanchez</h1>
                    </Link>
                    <div className='status'>
                        <p><strong>Status:</strong> Vivo</p>
                    </div>
                    <div className='especie'>
                        <p><strong>Espécie:</strong> Humano</p>
                    </div>
                </div>
            </div>
    )
}

export default Card;