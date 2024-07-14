let socket;
let playerName;
let players = [];
let currentPlayer;
let deck;
let discardPile = [];
let playerHand = [];

const playerNameInput = document.getElementById('player-name');
const joinGameButton = document.getElementById('join-game');
const startGameButton = document.getElementById('start-game');
const playerList = document.getElementById('player-list');
const gameBoard = document.getElementById('game-board');
const playerHandElement = document.getElementById('player-hand');

joinGameButton.addEventListener('click', joinGame);
startGameButton.addEventListener('click', startGame);

function joinGame() {
    playerName = playerNameInput.value.trim();
    if (playerName) {
        socket = io('https://your-server-url.com'); // Replace with your actual server URL
        socket.emit('join', playerName);
        
        socket.on('updatePlayers', (updatedPlayers) => {
            players = updatedPlayers;
            updatePlayerList();
        });

        socket.on('gameStarted', initGame);
        socket.on('updateGameState', updateGameState);
    }
}

function updatePlayerList() {
    playerList.innerHTML = '';
    players.forEach(player => {
        const playerElement = document.createElement('div');
        playerElement.textContent = player;
        playerList.appendChild(playerElement);
    });

    startGameButton.disabled = players.length < 3;
}

function startGame() {
    socket.emit('startGame');
}

function initGame(gameState) {
    deck = new Deck();
    currentPlayer = gameState.currentPlayer;
    playerHand = gameState.playerHand;
    discardPile = gameState.discardPile;

    document.getElementById('lobby').style.display = 'none';
    gameBoard.style.display = 'block';

    renderGameState();
}

function renderGameState() {
    renderPlayerHand();
    renderDiscardPile();
    // Render other game elements
}

function renderPlayerHand() {
    playerHandElement.innerHTML = '';
    playerHand.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.textContent = card.name;
        cardElement.addEventListener('click', () => playCard(card));
        playerHandElement.appendChild(cardElement);
    });
}

function renderDiscardPile() {
    const discardPileElement = document.getElementById('discard-pile');
    discardPileElement.innerHTML = '';
    if (discardPile.length > 0) {
        const topCard = discardPile[discardPile.length - 1];
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.textContent = topCard.name;
        discardPileElement.appendChild(cardElement);
    }
}

function playCard(card) {
    if (currentPlayer === playerName) {
        socket.emit('playCard', card);
    }
}

function updateGameState(gameState) {
    currentPlayer = gameState.currentPlayer;
    playerHand = gameState.playerHand;
    discardPile = gameState.discardPile;
    renderGameState();
}
