function iniciar(){
    var itens = document.getElementsByClassName('itens');
    for (let i = 0; i < itens.length; i++) {
        itens[i].addEventListener('click', selecionarItem)

    }
}

function selecionarItem(evento){
    var alvo = evento.target
    alvo.parentElement //falta colocar borda e corrigir o erro de múltiplas escolhas.
}
