const prompt = require("prompt-sync")({ sigint: true });

const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck() {
  let deck = new Array();
  // Create a deck
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i] };
      deck.push(card);
    }
  }
  return deck;
}

function shuffle(deck) {
  // for 1000 turns
  // switch the values of two random cards
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
}

function checkValue(card) {
  // Check card value
  if (card === "A") return 1;
  if (card === "J" || card === "K" || card === "Q" || card === "10") return 0;
  return Number(card);
}

function pokDeng(yourCards, dealerCards) {
  // Find who will win
  let yourScore = checkValue(yourCards[0].Value) + checkValue(yourCards[1].Value);
  let dealerScore = checkValue(dealerCards[0].Value) + checkValue(dealerCards[1].Value);

  if (yourScore > dealerScore) return "Win";
  if (yourScore < dealerScore) return "Lose";
  return "Tie";
}

let gameStart = true;
let deck = getDeck();

while (gameStart) {
  let yourChips = Number(prompt("Please put your bet "));

  shuffle(deck);

  let yourCards = [deck[0], deck[1]];
  let dealerCards = [deck[2], deck[3]];

  console.log(`You got ${yourCards[0].Suit}-${yourCards[0].Value}, ${yourCards[1].Suit}-${yourCards[1].Value}`);
  console.log(`The dealer got ${dealerCards[0].Suit}-${dealerCards[0].Value}, ${dealerCards[1].Suit}-${dealerCards[1].Value}`);

  let result = pokDeng(yourCards, dealerCards);

  if (result === "Win") {
    console.log(`You won!!!, received ${yourChips} chips`);
  } else if (result === "Lose") {
    yourChips = 0;
    console.log(`You lose, you lose the bet`);
  } else {
    console.log(`Tie with the dealer, you get nothing`);
  }

  let checkContinue = prompt("Wanna play more (Yes/No)? ");
  if (checkContinue === "No") {
    gameStart = false;
    if (yourChips <= 1) {
      console.log(`You got total ${yourChips} chip`);
    } else {
      console.log(`You got total ${yourChips} chips`);
    }
  }
}

module.exports = { pokDeng };
