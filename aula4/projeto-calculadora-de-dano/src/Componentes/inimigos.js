import React from 'react';

function Inimigos(props){
    let classCSS = 'inimigo'
  if (props.marcado){
    classCSS = 'inimigo marcado'
    }
  return( 
    <div className={classCSS} onClick={()=>props.marcarSelecionado(props.name)} >
      <img src={props.image} alt="" width='200'/>
      <h5>{props.name}</h5>
    </div>
  );
}

export default Inimigos;