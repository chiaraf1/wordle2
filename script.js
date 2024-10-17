const palabraClave = "MANGO";  // Palabra fija a adivinar
let currentRow = 0;            // Fila actual
let currentCol = 0;            // Columna actual
let board = document.querySelectorAll('#tablero .fila');
let rows = Array.from(board);
let currentWord = [];

// botones del teclado virtual
let keys = document.querySelectorAll('#teclado button');

keys.forEach(key => {
    key.addEventListener('click', function() {
        let letter = key.textContent.toUpperCase();

        if (letter === 'DEL') {
            deleteLetter();
        } else if (letter === 'ENTER') {
            submitWord();
        } else if (letter.match(/^[A-Z]$/)) {
            addLetter(letter);
        }
    });
});
//  añadir letras
function addLetter(letter) {
    if (currentCol < 5 && currentRow < 6) {
        let box = rows[currentRow].children[currentCol];
        box.textContent = letter;
        currentWord.push(letter);
        currentCol++;
    }
}
//  borrar la última letra
function deleteLetter() {
    if (currentCol > 0) {
        currentCol--;
        let box = rows[currentRow].children[currentCol];
        box.textContent = '';
        currentWord.pop();
    }
}