import React from 'react';

class Footer extends React.Component{
    render() {
        return(
            <footer className='body__footer'>
                <div className='body__footer__info'>
                    <span><strong>Criador:</strong> Jonathan Sulliman</span>
                    <span><strong>Projeto criado com React.js</strong></span>
                    <span><strong>Projeto para aula de Front-End da 
                        <a href='https://blueedtech.com.br/' target='_blanck'> Blue-EdTech</a>
                    </strong></span>
                </div>
            </footer>
        );
    }
}

export default Footer;