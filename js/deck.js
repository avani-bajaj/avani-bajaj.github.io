class Deck {
    constructor() {
        this.cards = [];
        this.loadCardsFromJSON();
    }

    async loadCardsFromJSON() {
        try {
            const response = await fetch('assets/cards.json');
            const data = await response.json();
            this.cards = data.cards;
            this.shuffle();
        } catch (error) {
            console.error('Error loading cards:', error);
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    drawCard() {
        if (this.cards.length === 0) {
            throw new Error('No cards left in the deck');
        }
        return this.cards.pop();
    }
}
