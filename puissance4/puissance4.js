const rows = 6;
const cols = 7;
let currentPlayer = 'X';
let gameBoard = initBoard();

function initBoard() {
    return Array.from({ length: rows }, () => Array(cols).fill(''));
}

function renderBoard() {
    const boardElement = document.getElementById('gameBoard');
    boardElement.innerHTML = '';

    for (let row = 0; row < rows; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < cols; col++) {
            const td = document.createElement('td');
            td.textContent = gameBoard[row][col];
            td.addEventListener('click', () => dropPiece(col));
            tr.appendChild(td);
        }
        boardElement.appendChild(tr);
    }
}

function dropPiece(col) {
    for (let row = rows - 1; row >= 0; row--) {
        if (gameBoard[row][col] === '') {
            gameBoard[row][col] = currentPlayer;
            if (checkWinner()) {
                alert(`Player ${currentPlayer} wins!`);
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                renderBoard();
            }
            return;
        }
    }
}

function checkWinner() {
    // Check horizontal
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col <= cols - 4; col++) {
            if (
                gameBoard[row][col] !== '' &&
                gameBoard[row][col] === gameBoard[row][col + 1] &&
                gameBoard[row][col] === gameBoard[row][col + 2] &&
                gameBoard[row][col] === gameBoard[row][col + 3]
            ) {
                afficherExplosionConfettis();
                return true;
            }
        }
    }

    // Check vertical
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row <= rows - 4; row++) {
            if (
                gameBoard[row][col] !== '' &&
                gameBoard[row][col] === gameBoard[row + 1][col] &&
                gameBoard[row][col] === gameBoard[row + 2][col] &&
                gameBoard[row][col] === gameBoard[row + 3][col]
            ) {
                afficherExplosionConfettis();
                return true;
            }
        }
    }

    // Check diagonal (from top-left to bottom-right)
    for (let row = 0; row <= rows - 4; row++) {
        for (let col = 0; col <= cols - 4; col++) {
            if (
                gameBoard[row][col] !== '' &&
                gameBoard[row][col] === gameBoard[row + 1][col + 1] &&
                gameBoard[row][col] === gameBoard[row + 2][col + 2] &&
                gameBoard[row][col] === gameBoard[row + 3][col + 3]
            ) {
                afficherExplosionConfettis();
                return true;
            }
        }
    }

    // Check diagonal (from top-right to bottom-left)
    for (let row = 0; row <= rows - 4; row++) {
        for (let col = 3; col < cols; col++) {
            if (
                gameBoard[row][col] !== '' &&
                gameBoard[row][col] === gameBoard[row + 1][col - 1] &&
                gameBoard[row][col] === gameBoard[row + 2][col - 2] &&
                gameBoard[row][col] === gameBoard[row + 3][col - 3]
            ) {
                afficherExplosionConfettis();
                return true;
            }
        }
    }

    return false;
}
function afficherExplosionConfettis() {var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);}
function resetGame() {
    gameBoard = initBoard();
    currentPlayer = 'X';
    renderBoard();
}

// Initial render
renderBoard();
