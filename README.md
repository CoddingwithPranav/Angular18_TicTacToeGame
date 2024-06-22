# Tic Tac Toe Game Challenge

## Objective
Develop a fully functional Tic Tac Toe game using Angular. The game should allow two players to play against each other on the same device and provide a simple, intuitive interface.

## Tasks

### 1. Setup and Project Initialization
- **Task 1.1**: Set up a new Angular project using Angular CLI.
- **Task 1.2**: Configure the project structure and install any necessary dependencies (must have a UI component library).

### 2. Game Board UI
- **Task 2.1**: Create the game board with a 3x3 grid layout. Each cell in the grid should be clickable.
- **Task 2.2**: Style the game board to make it visually appealing and responsive.

### 3. Game Logic
- **Task 3.1**: Implement the core game logic to handle player turns. Players should alternate between placing "X" and "O" on the board.
- **Task 3.2**: Develop a function to check for win conditions (three in a row horizontally, vertically, or diagonally) after each move.
- **Task 3.3**: Implement logic to check for a draw when all cells are filled, and there is no winner.

### 4. User Interaction
- **Task 4.1**: Display the current player's turn.
- **Task 4.2**: Provide a way to reset the game board for a new game.
- **Task 4.3**: Show a message when a player wins or when the game ends in a draw.

### 5. Additional Features
- **Task 5.1**: Add a score tracker to keep track of wins for each player.
- **Task 5.2**: Implement animations or transitions for a better user experience.
- **Task 5.3**: Allow players to choose their symbols (X or O) before the game starts (optional).

## Deliverables
- A fully functional Tic Tac Toe game application.
- At least one custom directive, one custom pipe, and optionally a custom decorator.
- Source code repository (e.g., GitHub) with clear documentation (if possible).

## Evaluation Criteria
- **Functionality**: Does the game work correctly according to the specified rules?
- **Usability**: Is the game easy to play and understand?
- **Code Quality**: Is the code well-organized, documented, and maintainable? Are there custom directives and custom pipes?
- **Design**: Is the UI visually appealing and responsive?

## Timeline
- Push the project to your GitHub repository and deploy your application on Heroku or any other free hosting site. Share the working application link within this Saturday.

Note: Feel free to show your extra creativity and ideas (optional).

## Tools and Technologies
- **Frontend Framework**: Angular
- **Styling**: CSS, SCSS, or any preferred CSS framework
- **Version Control**: Git/GitHub

## Installation
1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd tic-tac-toe-game
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Run the application:
    ```bash
    ng serve
    ```
5. Open your browser and navigate to `http://localhost:4200`.

## Usage
1. The game starts with player X.
2. Players take turns clicking on the empty cells to place their symbols.
3. The game will automatically check for win conditions or a draw after each move.
4. A message will display the winner or if the game ends in a draw.
5. Use the reset button to start a new game.

## Code Explanation
### Game Service (`game.service.ts`)
The `GameService` class handles the core game logic and interactions, including player moves, checking for win conditions, and managing game states.

Key Methods:
- `resetGame()`: Resets the game board and initializes the game state.
- `makeMove(row: number, col: number)`: Handles a player's move, updates the game board, and checks for win/draw conditions.
- `makeMoveBotMode(row: number, col: number, botModeEnabled: boolean)`: Handles player moves in bot mode and triggers the bot's move after a delay.
- `makeBotMove()`: Makes a random move for the bot and checks for win conditions.

### Custom Directive and Pipe
Ensure to implement at least one custom directive and one custom pipe as per the requirements to enhance the functionality and usability of the game.

## Contributions
Feel free to fork this repository, create a new branch, and submit a pull request with your improvements and enhancements.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments
- The Angular team for the Angular framework.
- Any third-party libraries used in this project.
- Inspiration and support from the developer community.

---

By following this challenge description, you should be able to develop a comprehensive Tic Tac Toe game using Angular that meets the specified requirements. Happy coding!