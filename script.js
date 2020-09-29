var player = null;
var selectedPlayer = document.getElementById('jogador-selecionado')

changePlayer(valor = 'X');

function selectSquare(id) {
    var quadrado = document.getElementById(id);

    quadrado.innerHTML = player;
    quadrado.style.color = '#000';
    
}

function changePlayer(valor) {
    player = valor;
    selectedPlayer.innerHTML = player;
}
