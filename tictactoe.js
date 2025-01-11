const cells = document.querySelectorAll('.cell');
const resultMessage = document.getElementById('gameresult');

var turnNum = 0;
var cellList = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
};
var cellSign = {
    0: 'true',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
};

cells.forEach(cell => {
    cell.addEventListener('click', function(e){
        let value = e.target.dataset.value;
        
        getSign(value);
        cellList[value] = true;
        cellSign
        turnNum++;
        
        cellSign[value] = getSign(value);
        checkWin();

        if (checkWin()) {
            endGame();
        } else if (allCellsFilled()) {
            resultMessage.textContent = "It's a Draw!";
            endGame();
        }
    });
});

function getSign(value){
    let localCell = document.querySelector(`[data-value="${value}"]`)
    if (turnNum % 2 === 0) {
        localCell.textContent = "O";
        localCell.disabled = true;
        return "O";
    } else if (turnNum % 2 === 1) {
        localCell.textContent = "X";
        localCell.disabled = true;
        return "X";
    }
}
function checkWin(){


    if (cellList[0] && cellList[1] && cellList[2] && cellSign[0] === cellSign[1] && cellSign[1] === cellSign[2]) {
        if (cellSign[0] === 'X') {
            resultMessage.textContent = 'X Wins!';
            return true;
        } else if (cellSign[0] === 'O') {
            resultMessage.textContent = 'O Wins!';
            return true;
        }
    }
    if (cellList[3] && cellList[4] && cellList[5] && cellSign[3] === cellSign[4] && cellSign[4] === cellSign[5]) {
        if (cellSign[3] === 'X') {
            resultMessage.textContent = 'X Wins!';
            return true;
        } else if (cellSign[3] === 'O') {
            resultMessage.textContent = 'O Wins!';
            return true;
        }
    }
    if (cellList[6] && cellList[7] && cellList[8] && cellSign[6] === cellSign[7] && cellSign[7] === cellSign[8]) {
        if (cellSign[6] === 'X') {
            resultMessage.textContent = 'X Wins!';
            return true;
        } else if (cellSign[6] === 'O') {
            resultMessage.textContent = 'O Wins!';
            return true;
        }
    }
    if (cellList[0] && cellList[3] && cellList[6] && cellSign[0] === cellSign[3] && cellSign[3] === cellSign[6]) {
        if (cellSign[0] === 'X') {
            resultMessage.textContent = 'X Wins!';
            return true;
        } else if (cellSign[0] === 'O') {
            resultMessage.textContent = 'O Wins!';
            return true;
        }
    }
    if (cellList[1] && cellList[4] && cellList[7] && cellSign[1] === cellSign[4] && cellSign[4] === cellSign[7]) {
        if (cellSign[1] === 'X') {
            resultMessage.textContent = 'X Wins!';
            return true;
        } else if (cellSign[1] === 'O') {
            resultMessage.textContent = 'O Wins!';
            return true;
        }
    }
    if (cellList[2] && cellList[5] && cellList[8] && cellSign[2] === cellSign[5] && cellSign[5] === cellSign[8]) {
        if (cellSign[2] === 'X') {
            resultMessage.textContent = 'X Wins!';
            return true;
        } else if (cellSign[2] === 'O') {
            resultMessage.textContent = 'O Wins!';
            return true;
        }
    }
    if (cellList[0] && cellList[4] && cellList[8] && cellSign[0] === cellSign[4] && cellSign[4] === cellSign[8]) {
        if (cellSign[0] === 'X') {
            resultMessage.textContent = 'X Wins!';
            return true;
        } else if (cellSign[0] === 'O') {
            resultMessage.textContent = 'O Wins!';
            return true;
        }
    }
    if (cellList[2] && cellList[4] && cellList[6] && cellSign[2] === cellSign[4] && cellSign[4] === cellSign[6]) {
        if (cellSign[2] === 'X') {
            resultMessage.textContent = 'X Wins!';
            return true;
        } else if (cellSign[2] === 'O') {
            resultMessage.textContent = 'O Wins!';
            return true;
        }
    }
    return false;
}

function allCellsFilled() {
    for (i=0;i<9;i++){
        if (cellList[i] === false){
            return false
        }
    }
    return true
}

function endGame(){
    const resetButton = document.getElementById('resetbutton');
    
    for (i=0; i<9; i++){
        let cell = document.querySelector(`[data-value="${i}"]`)
        cell.disabled = true;
    }
    resetButton.style.display = 'block';
    resetButton.addEventListener('click', function(){
        resetButton.style.display = 'none';
        resetGame();
    });
}
function resetGame(){
    turnNum = 0;
    resultMessage.textContent = '';
    for (i=0;i<9;i++){
        let cell = document.querySelector(`[data-value="${i}"]`)
        cell.textContent = '';
        cell.disabled = false;
        cellList[i] = false;
        cellSign[i] = '';
    }
}
