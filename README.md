# Chess-Game

# Chess Game with AI

This repository contains the files for a simple web-based Chess game. The game features a player-vs-AI mode, where the AI currently makes random moves. The implementation uses popular chess libraries for board rendering and game logic.

## Features

- Interactive chessboard allowing drag-and-drop moves.
- Basic AI that responds with random legal moves.
- Detects game-end scenarios (checkmate, draw).
- User-friendly interface styled with CSS.

## Files

### 1. `index.html`
The main HTML file that sets up the structure of the web page. It includes:
- Chessboard.js for rendering the chessboard.
- Chess.js for handling game rules and logic.
- A reference to `script.js` for custom game logic.

### 2. `script.js`
JavaScript file that:
- Initializes the chessboard and the game logic.
- Handles player move validation.
- Implements the AI logic for making random moves.
- Alerts the user when the game ends (e.g., checkmate).

## Libraries Used

- [Chessboard.js](https://chessboardjs.com): For rendering the chessboard.
- [Chess.js](https://github.com/jhlywa/chess.js): For handling chess game rules and move validation.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chess-game-ai.git
   cd chess-game-ai
   ```

2. Open `index.html` in your favorite web browser.

## How to Play

1. Drag and drop pieces to make your move.
2. The AI will automatically make its move after yours.
3. The game ends when a checkmate or draw is detected.

## Future Improvements

- Add a stronger AI with a minimax algorithm.
- Improve user interface and visual design.
- Implement additional features like move history and undo functionality.
