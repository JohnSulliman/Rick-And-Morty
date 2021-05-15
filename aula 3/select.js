function iniciar(){
    var orc = document.getElementById('orc')
    orc.addEventListener('click', selecionarItem)
    var soco = document.getElementById('soco')
    soco.addEventListener('click', selecionarItem)
}

function selecionarItem(evento){
    evento.target.style = "border: 3px solid blue"
}

// function iniciar(){
//     var elementos = document.getElementsByClassName('elemento');
//     for (let i = 0; i < elementos.length; i++) {
//         elementos[i].addEventListener('click', marcarElementoSelecionado)
//     }
// }
