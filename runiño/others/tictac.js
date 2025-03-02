let board = ["", "", "", "", "", "", "", "", ""];
      let currentPlayer = "X";
      let gameActive = false;
      let gameMode = ""; // "pvp" or "pvb"
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      function startGame(mode) {
        gameMode = mode;
        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameActive = true;
        document.getElementById("status").textContent =
          mode === "pvp" ? "PvP Mode: X's turn" : "PvB Mode: Your turn (X)";
        drawBoard();
      }

      function drawBoard() {
        const boardElement = document.getElementById("board");
        boardElement.innerHTML = "";
        board.forEach((cell, index) => {
          const cellElement = document.createElement("div");
          cellElement.classList.add("cell");
          if (cell !== "") cellElement.classList.add("disabled");
          cellElement.textContent = cell;
          cellElement.onclick = () => handleCellClick(index);
          boardElement.appendChild(cellElement);
        });
      }

      function handleCellClick(index) {
        if (!gameActive || board[index] !== "") return;

        board[index] = currentPlayer;
        drawBoard();
        if (checkWin(currentPlayer)) {
          document.getElementById("status").textContent =
            currentPlayer + " Wins!";
          gameActive = false;
          return;
        } else if (board.every((cell) => cell !== "")) {
          document.getElementById("status").textContent = "It's a draw!";
          gameActive = false;
          return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        document.getElementById("status").textContent =
          gameMode === "pvp" ? currentPlayer + "'s turn" : "Bot's turn...";

        if (gameMode === "pvb" && currentPlayer === "O") {
          setTimeout(botMove, 500);
        }
      }

      function botMove() {
        let availableCells = board
          .map((cell, index) => (cell === "" ? index : null))
          .filter((index) => index !== null);
        if (availableCells.length === 0) return;
        let randomIndex =
          availableCells[Math.floor(Math.random() * availableCells.length)];

        board[randomIndex] = "O";
        drawBoard();

        if (checkWin("O")) {
          document.getElementById("status").textContent = "Bot Wins!";
          gameActive = false;
          return;
        } else if (board.every((cell) => cell !== "")) {
          document.getElementById("status").textContent = "It's a draw!";
          gameActive = false;
          return;
        }

        currentPlayer = "X";
        document.getElementById("status").textContent = "Your turn (X)";
      }

      function checkWin(player) {
        return winningCombinations.some((combination) =>
          combination.every((index) => board[index] === player)
        );
      }

      function resetGame() {
        board = ["", "", "", "", "", "", "", "", ""];
        gameActive = false;
        gameMode = "";
        document.getElementById("status").textContent =
          "Select a mode to start!";
        drawBoard();
      }

      drawBoard();