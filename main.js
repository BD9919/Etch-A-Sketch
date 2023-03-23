let color = '#f2eecb';
let click = false;


function makeBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square)

    }
}

makeBoard(16);

function sizeBoard(input) {
    if (input >= 2 && input <= 100) {
        makeBoard(input);
    } else {
        alert('Too Many Squares');
    }
}

function colorSquare() {
    if (click) {
        if (color === 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.background = color;
        }
    }
}

function changeColor(choice) {
    color = choice
}

function reset() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
        if (click) {
            document.querySelector('.drawing').textContent = "Mode: You are Drawing!"
        } else {
            document.querySelector('.drawing').textContent = "Mode: NOT ON!"
        }
    }
});