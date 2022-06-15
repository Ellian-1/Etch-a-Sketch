let color = 'black'
const BoardSet = (size) => {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    board.style.border = "1px solid black";
    
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        });
        square.style.backgroundColor = 'whiite';
        board.insertAdjacentElement('beforeend', square);
    }
};

BoardSet();

const SetSize = (input) => {
    BoardSet(input);
};

const SetColor = (choice) => {
    color = choice
};