let decks = 1;
let carddeck = [
    "cardSpades1", "cardSpades2", "cardSpades3", "cardSpades4", "cardSpades5", "cardSpades6", "cardSpades7", "cardSpades8", "cardSpades9", "cardSpades10", "cardSpades11", "cardSpades12", "cardSpades13",
    "cardHearts1", "cardHearts2", "cardHearts3", "cardHearts4", "cardHearts5", "cardHearts6", "cardHearts7", "cardHearts8", "cardHearts9", "cardHearts10", "cardHearts11", "cardHearts12", "cardHearts13",
    "cardClubs1", "cardClubs2", "cardClubs3", "cardClubs4", "cardClubs5", "cardClubs6", "cardClubs7", "cardClubs8", "cardClubs9", "cardClubs10", "cardClubs11", "cardClubs12", "cardClubs13",
    "cardDiamonds1", "cardDiamonds2", "cardDiamonds3", "cardDiamonds4", "cardDiamonds5", "cardDiamonds6", "cardDiamonds7", "cardDiamonds8", "cardDiamonds9", "cardDiamonds10", "cardDiamonds11", "cardDiamonds12", "cardDiamonds13",
];
let deck = carddeck;
let currentCard = 0;
let dPlacedCards = 1;
let pPlacedCards = 1;

function ScrambleDecks() {
    
    for(let i = 1; i < decks; i++){
        deck = deck.concat(carddeck);
    }

    deck = deck.sort(() => Math.random() - 0.5)
    console.log(deck);
}

function Start() {
    currentCard = 0;

    document.getElementById("dCard" + dPlacedCards).src = "./assets/images/Cards/" + deck[currentCard] + ".png";
    dPlacedCards++;
    currentCard++;
    document.getElementById("pCard" + pPlacedCards).src = "./assets/images/Cards/" + deck[currentCard] + ".png";
    pPlacedCards++;
    currentCard++;
    document.getElementById("pCard" + pPlacedCards).src = "./assets/images/Cards/" + deck[currentCard] + ".png";
    pPlacedCards++;
    currentCard++;


}
function Hit() {
    document.getElementById("pCard" + pPlacedCards).src = "./assets/images/Cards/" + deck[currentCard] + ".png";
    pPlacedCards++;
    currentCard++;
}