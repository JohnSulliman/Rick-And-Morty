import {Link} from 'react-router-dom'

function Info() {
    return(
        <section className='char'>
            <div className='char-imagem'>
                <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='Rick Sanchez' className='imagem' />
                <div className='char-info'>
                    <div className='char-nome'>
                        <h1>Rick Sanchez</h1>
                    </div>
                    <div className='char-status'>
                        <p><strong>Status:</strong> Vivo</p>
                    </div>
                    <div className='char-especie'>
                        <p><strong>Espécie:</strong> Humano</p>
                    </div>
                </div>
            </div>
            <Link to='/' className='char-botao'>
                    <span>Voltar</span>
            </Link>
        </section>
    );
}


export default Info;