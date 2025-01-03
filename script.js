document.addEventListener('DOMContentLoaded', function () {
    let board = null;
    let game = new Chess();

    function onDragStart(source, piece) {
        // Prevent moving if the game is over or if it's the AI's turn
        if (game.in_checkmate() || game.in_draw() || piece.search(/^b/) !== -1) {
            return false;
        }
    }

    function onDrop(source, target) {
        // Attempt to make the player's move
        const move = game.move({
            from: source,
            to: target,
            promotion: 'q' // Always promote to a queen
        });

        // If the move is invalid, snap the piece back
        if (move === null) return 'snapback';

        // AI makes a move after the player
        window.setTimeout(makeBestMove, 250);
    }

    function makeBestMove() {
        let possibleMoves = game.legal_moves();
        if (possibleMoves.length === 0) return; // Game over

        // AI makes a random move (for now)
        const randomIdx = Math.floor(Math.random() * possibleMoves.length);
        game.move(possibleMoves[randomIdx]);

        // Update the board with the AI's move
        board.position(game.fen());

        if (game.in_checkmate()) {
            alert("Checkmate! AI wins.");
        }
    }

    const config = {
        draggable: true,
        position: 'start',
        onDragStart: onDragStart,
        onDrop: onDrop
    };

    board = Chessboard('board', config);
});
