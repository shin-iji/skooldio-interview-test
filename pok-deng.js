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
  let value;
  if (card === "A") {
    return (value = 1);
  } else if (card === "J" || card === "K" || card === "Q" || card === "10") {
    return (value = 0);
  } else {
    return (value = Number(card));
  }
}

function pokDeng(yourScore, dealerScore) {
  // Find who will win
  if (yourScore > dealerScore) {
    console.log(`You won!!!, received ${yourChips} chips`);
    return "Win";
  } else if (yourScore == dealerScore) {
    console.log(`Tie with the dealer, you get nothing`);
    return "Tie";
  } else {
    yourChips = "0";
    console.log(`You lose, you lose the bet`);
    return "Lose";
  }
}

const deck = getDeck();

let yourChips = prompt("Please put your bet ");

let gameStart = true;

while (gameStart) {
  shuffle(deck);
  //console.log(deck);

  console.log(`You got ${deck[0].Suit}-${deck[0].Value}, ${deck[1].Suit}-${deck[1].Value}`);
  console.log(`The dealer got ${deck[2].Suit}-${deck[2].Value}, ${deck[3].Suit}-${deck[3].Value}`);

  let yourScore = checkValue(deck[0].Value) + checkValue(deck[1].Value);
  let dealerScore = checkValue(deck[2].Value) + checkValue(deck[3].Value);

  //console.log(yourScore);
  //console.log(dealerScore);

  pokDeng(yourScore, dealerScore);

  let checkContinue = prompt("Wanna play more (Yes/No)? ");
  if (checkContinue === "Yes") {
    yourChips = prompt("Please put your bet ");
  } else {
    gameStart = false;
    if (yourChips === "0" || yourChips === "1") {
      console.log(`You got total ${yourChips} chip`);
    } else {
      console.log(`You got total ${yourChips} chips`);
    }
  }
}

module.exports = { pokDeng };
