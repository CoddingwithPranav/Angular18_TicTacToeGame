# Tic Tac Toe Game

## About the Project
This is a fully functional Tic Tac Toe game developed using Angular. The game allows two players to play against each other on the same device and includes a simple, intuitive interface. Additionally, the game features a bot mode where the player can compete against a bot that makes moves with a 2-second delay to simulate thinking.

## Features
- **Game Modes**: Play against another player or challenge the bot.
- **Score Tracking**: Keep track of wins for Player X, Player O, and draws.
- **Interactive Interface**: Clickable cells with sound effects for a realistic gaming experience.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Reset and Replay**: Easily start a new game with a reset button.

## Setup and Installation
To run the Tic Tac Toe game locally, follow these steps:
1. **Clone the repository**:
   - Clone the repository using Git: `git clone <repository-url>`
   - Navigate into the project directory: `cd tic-tac-toe-game`

2. **Install dependencies**:
   - Run `npm install` to install all necessary dependencies.

3. **Serve the application**:
   - Use Angular CLI to serve the application locally: `ng serve`
   - Navigate to `http://localhost:4200/` in your web browser.

## Usage
1. **Game Start**: The game starts with Player X.
2. **Player Turns**: Click on an empty cell to place your symbol (X or O).
3. **Win Conditions**: The game automatically checks for three in a row horizontally, vertically, or diagonally after each move.
4. **Game End**: A message displays when a player wins or when the game ends in a draw.
5. **Reset Game**: Click the reset button to start a new game.

## Code Explanation

### `game.service.ts`
The `GameService` class manages the core game logic and interactions, including player moves, checking for win conditions, and managing the game state.

#### Key Methods:
- **`resetGame()`**: Resets the game board and initializes the game state.
- **`makeMove(row: number, col: number)`**: Handles a player's move, updates the game board, and checks for win/draw conditions.
- **`makeMoveBotMode(row: number, col: number, botModeEnabled: boolean)`**: Handles player moves in bot mode and triggers the bot's move after a delay.
- **`makeBotMove()`**: Makes a random move for the bot and checks for win conditions.

#### Example Method from `GameService`:

```typescript
resetGame() {
  this.board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  this.currentPlayer = 'X';
  this.winner = '';
}

makeMove(row: number, col: number) {
  if (!this.board[row][col] && !this.winner) {
    this.clickAudio.play().catch((error: string) => console.error('Error playing click sound:', error));
    this.board[row][col] = this.currentPlayer;
    if (this.board.every(row => row.every(cell => cell !== ''))) {
      this.gameInfo.update((res: Gameinfo) => ({
        ...res,
        draw: res.draw + 1,
      }));
      this.popupMessage.set({message: "Oops it's a draw", color: 'black'});
    }
    if (this.checkWinner(row, col)) {
      this.winAudio.play().catch((error: string) => console.error('Error playing win sound:', error));
      this.winner = this.currentPlayer;
      if (this.currentPlayer === 'X') {
        this.gameInfo.update((res: Gameinfo) => ({
          ...res,
          playerXWin: res.playerXWin + 1,
        }));
        this.popupMessage.set({message: 'Player X won!', color: 'red'});
      }
      if (this.currentPlayer === 'O') {
        this.gameInfo.update((res: Gameinfo) => ({
          ...res,
          playerOWin: res.playerOWin + 1,
        }));
        this.popupMessage.set({message: 'Bot won!', color: 'blue'});
      }
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  } else {
    this.cancelAudio.play().catch((error: string) => console.error('Error playing cancel sound:', error));
    this.resetGame();
  }
}
```

## Acknowledgments
- Thanks to the Angular team for their powerful framework.
- Special thanks to the developer community for inspiration and support.

## Contact
For questions, suggestions, or feedback, please feel free to contact me via email or through GitHub.

---

Enjoy playing Tic Tac Toe! Start challenging your friends or test your skills against the bot. Happy gaming!