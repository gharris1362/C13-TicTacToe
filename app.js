let cells = document.getElementsByClassName('cell');
let winCheck = document.getElementById('winCheck');
let reset = document.getElementById('reset')
let cellCount = 0;
let cellArray = [];
let shape = 'X';

// all win conditions
let wins = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
];

// pushes cells into an array so i can use forEach
for (i = 0; i < cells.length; i++) {
    cellArray.push(cells[i]);
};

// adds event listener to each cell
cellArray.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.innerHTML == '') {
            cell.innerHTML = shape;
            cellCount++
            if (shape == 'X') {
                shape = 'O';
            } else {
                shape = 'X';
            };
            // console.log(cellCount);
            checkWin()
        } else {
            return;
        };
    });
});

// function to check if there is a win
function checkWin() {
    for (i = 0; i < wins.length; i++) {
        let xCount = 0;
        let oCount = 0;
        for (j = 0; j < wins[i].length; j++) {
            if (wins[i][j].innerHTML == 'X') {
                xCount++
            } else if (wins[i][j].innerHTML == 'O') {
                oCount++;
            };
        };
        if (oCount == 3 && cellCount <= 9 ) {
            winCheck.innerHTML = 'O Wins!';
            return
        } else if (xCount == 3 && cellCount <= 9) {
            winCheck.innerHTML = "X Wins!";
            console.log('checked');
            return
        } else  if (cellCount == 9 && xCount != 3 && oCount != 3) {
            console.log("X Count is " + xCount)
            winCheck.innerHTML = "It's a Tie!";
            return
        };
    };
};

// function to end the game
function endGame() {
    for (i = 0; i < cellArray.length; i++) {
        cellArray[i].innerHTML = ''
        winCheck.innerHTML = '';
        cellCount = 0;
        shape = 'X'
        console.clear()
    };
};


reset.addEventListener('click', () => {
    endGame();
});


// if (oCount == 3 && cellCount !== 9) {
//     winCheck.innerHTML = 'O Wins!';
// } else if (xCount == 3 && cellCount !== 9) {
//     winCheck.innerHTML = "X Wins!";
// } else if (cellCount == 9 && xCount == 3) {
//     winCheck.innerHTML = 'X Wins!';
// } else if (cellCount == 9 && oCount == 3) {
//     winCheck.innerHTML = 'O Wins!';
// } else  if (cellCount == 9) {
//     console.log("X Count is " + xCount)
//     winCheck.innerHTML = "It's a Tie!";
// }