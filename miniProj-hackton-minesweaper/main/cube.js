
const MINE = '💣';
var gMineCell = [];

 

function putMine(board, size, num) {
    for (let i = 0; i < num; i++) {
        let gLoc = {
            i: getRandomInt(size),
            j: getRandomInt(size)
        };

        let loc = board[gLoc.i][gLoc.j];
        loc.isMine = true;
        gMineCell.push(gLoc);
    }
    setMinesAroundCount();
    console.log(`gMineCell`, gMineCell);
    return gMineCell;

};

function mineRevealed() {
    for (let i = 0; i < gLevel.MINES; i++) {
        var cell = gMineCell.pop()
        if (cell) {
            gBoard[cell.i][cell.j] = MINE;
            renderCell(cell, MINE);
        }
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function setMinesAroundCounts(mat, rowIdx, colIdx) {
    var count = 0;
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i > mat.length - 1) continue;
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j > mat[0].length - 1) continue;
            if (i === rowIdx && j === colIdx) continue;
            var currCell = mat[i][j];
            if (currCell.isMine) count++;
        }
    }
    return count
}


function setMinesAroundCount() {
    for (let i = 0; i < gBoard.length; i++) {
        for (let j = 0; j < gBoard[0].length; j++) {
            var cell = gBoard[i][j]
            cell.minesAroundCount = setMinesAroundCounts(gBoard, i, j);
        }
    }



}


