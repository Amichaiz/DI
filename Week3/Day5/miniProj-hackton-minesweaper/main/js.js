
const GAMEON = '🙂';
const LOSE = '🤯';
const VICTORY = '😎';
const EMPTY = '';
const FLAG = '🚩'
var gBoard;
let elStatus = document.querySelector('.status');
let elMark = document.querySelector('.markcount');
let gElShownCount = document.querySelector('.showncount');
let elTime = document.querySelector('.time');

var firstClick = false;
var gStartTime;
var gWatchInterval;

var gLevel = {
    SIZE: 4,
    MINES: 2
};

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
};
function initGame() {
    gBoard = buildBoard(gLevel.SIZE)
    renderBoard(gBoard, '.board')
    endStopWatch();
    gMineCell = [];
    firstClick = false;
    // putMine(gBoard, gLevel.SIZE, gLevel.MINES)
    elStatus.textContent = GAMEON;
    gGame.secsPassed = 0;
    gElShownCount.textContent = 0;
    elTime.textContent = `000`;
    gGame.markedCount = 0;
    elMark.textContent = 0;
    gGame.isOn = true;
};




function cellClicked(elCell, i, j) {

    let cell = gBoard[i][j]
    //if cell was clicked add clicked class to it else return.

    if (elCell.classList.contains('.clicked')) {
        return;
    } else {
        elCell.classList.add('.clicked')
        countClicked(gBoard, i, j);
        checkWin();
    }
    //At first click creat board & render it to the page
    if (!firstClick) {
        firstClick = true;
        startStopWatch();
        putMine(gBoard, gLevel.SIZE, gLevel.MINES)
    }
    //update score
    elCell.innerText = cell.minesAroundCount
    if (elCell.classList.contains('.clicked') && !cell.isMine) {
    }
    //show all the cell with 0 neghibor
    if (cell.minesAroundCount === 0) {
        expandShown(gBoard, i, j)
    }

    //if mine end game
    if (cell.isMine) {
        elCell.innerText = MINE
        mineRevealed();
        gameOver();

    }

}
//count marked flags
function cellMarkedCount(event, elCell, i, j) {
    event.preventDefault();
    let tdCell = gBoard[i][j];
    if (elCell.classList.contains('.clicked') && !tdCell.isMarked) {
        return;
    } else {
        if (tdCell.isMarked === false) {
            elCell.textContent = FLAG;
            gGame.markedCount += 1;
            elMark.textContent = gGame.markedCount;
            tdCell.isMarked = true;
            elCell.classList.add('.clicked');
        } else if (tdCell.isMarked === true) {
            elCell.textContent = EMPTY;
            gGame.markedCount--;
            elMark.textContent = gGame.markedCount;
            tdCell.isMarked = false;
            elCell.classList.remove('.clicked');
        }
    }

    return gGame.markedCount;

}

//count & update score
function countClicked(board, i, j) {
    gGame.shownCount = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let elCell = document.querySelector(`.cell-${i}-${j}`);
            let check = elCell.classList.contains('.clicked');
            if (board[i][j].isMarked === true && check) {
                continue;
            } else if (check) {
                gGame.shownCount++;
            }
        }
    }
    gElShownCount.textContent = gGame.shownCount;

    return gGame.shownCount;
}

function checkWin() {
    if ((gLevel.SIZE * gLevel.SIZE - gLevel.MINES) === gGame.shownCount) {
        elStatus.textContent = VICTORY;
        gGame.isOn = false;
        console.log('GOOD JOB');
        gElShownCount.textContent = "0";
        endStopWatch();

    }
}

//is game over
function gameOver() {
    elStatus.textContent = LOSE;
    gGame.isOn = false
    endStopWatch();
    console.log('GAME OVER');
}

//show all 0 neighbores.
function expandShown(mat, rowIdx, colIdx) {
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i > mat.length - 1) continue;
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j > mat[0].length - 1) continue;
            if (i === rowIdx && j === colIdx) continue;
            var Cell = mat[i][j];
            if (Cell.isMine || Cell.isShown || Cell.isMarked) continue;

            if (Cell.minesAroundCount === 0) {
                var elCell = document.querySelector(`.cell-${i}-${j}`);
                elCell.classList.add('.clicked');
                countClicked(gBoard, i, j);
                checkWin();
                elCell.innerHTML = Cell.minesAroundCount
                Cell.isShown = true;
                expandShown(gBoard, i, j);
            }


        }
    }
}
