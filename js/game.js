let players = [];
let currentPlayerIndex = 0;
let deck;
let discardPile = [];
let playerHands = [];

const playerCountInput = document.getElementById('player-count');
const startGameButton = document.getElementById('start-game');
const gameBoard = document.getElementById('game-board');
const playerHandElement = document.getElementById('player-hand');
const currentPlayerElement = document.getElementById('current-player');
const endTurnButton = document.getElementById('end-turn');
const discardPileElement = document.getElementById('discard-pile');

startGameButton.addEventListener('click', startGame);
endTurnButton.addEventListener('click', endTurn);

async function startGame() {
    const playerCount = parseInt(playerCountInput.value);
    if (playerCount >= 3 && playerCount <= 10) {
        await initializeGame(playerCount);
        document.getElementById('setup').style.display = 'none';
        gameBoard.style.display = 'block';
    } else {
        alert('Please enter a number of players between 3 and 10.');
    }
}

async function initializeGame(playerCount) {
    deck = new Deck();
    await deck.loadCardsFromJSON(); // Wait for the deck to be loaded

    players = Array.from({length: playerCount}, (_, i) => `Player ${i + 1}`);
    playerHands = players.map(() => []);

    // Deal 7 cards to each player
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < players.length; j++) {
            playerHands[j].push(deck.drawCard());
        }
    }

    discardPile.push(deck.drawCard());
    currentPlayerIndex = 0;
    updateGameState();

    console.log('Game initialized:', {players, playerHands, discardPile});
}

function updateGameState() {
    renderCurrentPlayer();
    renderPlayerHand();
    renderDiscardPile();
}

function renderCurrentPlayer() {
    currentPlayerElement.textContent = `Current Player: ${players[currentPlayerIndex]}`;
}

function renderPlayerHand() {
    playerHandElement.innerHTML = '';
    playerHands[currentPlayerIndex].forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.textContent = `${card.color} ${card.value}`;
        cardElement.addEventListener('click', () => playCard(card));
        playerHandElement.appendChild(cardElement);
    });
}

function renderDiscardPile() {
    discardPileElement.innerHTML = '';
    if (discardPile.length > 0) {
        const topCard = discardPile[discardPile.length - 1];
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.textContent = `${topCard.color} ${topCard.value}`;
        discardPileElement.appendChild(cardElement);
    }
}

function playCard(card) {
    const hand = playerHands[currentPlayerIndex];
    const cardIndex = hand.findIndex(c => c.color === card.color && c.value === card.value);
    if (cardIndex !== -1) {
        const playedCard = hand.splice(cardIndex, 1)[0];
        discardPile.push(playedCard);
        if (deck.cards.length > 0) {
            hand.push(deck.drawCard());
        }
        endTurn();
    }
}

function endTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateGameState();
}
