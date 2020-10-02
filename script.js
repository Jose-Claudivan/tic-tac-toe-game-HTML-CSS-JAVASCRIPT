var player = null;
var selectedPlayer = document.getElementById('jogador-selecionado')
var squares = document.getElementsByClassName('quadrado');

changePlayer('X');

function selectSquare(id) {
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = player;
    quadrado.style.color = '#000';

    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }
    
    changePlayer(player);
}

function changePlayer(valor) {
    player = valor;
    selectedPlayer.innerHTML = player;
}

function checkWinner() {
    var square1 = document.getElementById(1);
    var square2 = document.getElementById(2);
    var square3 = document.getElementById(3);
    var square4 = document.getElementById(4);
    var square5 = document.getElementById(5);
    var square6 = document.getElementById(6);
    var square7 = document.getElementById(7);
    var square8 = document.getElementById(8);
    var square9 = document.getElementById(9);

    if (checkSequence(square1, square2, square3)) {
        changeSquareColor(square1, square2, square3);
    }
}

function changeSquareColor(square1, square2, square3) {
    square1.style.color = '#0f8';
    square2.style.color = '#0f8';
    square3.style.color = '#0f8';
}

function checkSequence(square1, square2, square3) {
    var isEqual = false;

    if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        isEqual = true;
    }

    return isEqual;
}
