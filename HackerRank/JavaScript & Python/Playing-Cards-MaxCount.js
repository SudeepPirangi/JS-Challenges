/*
 * Question: Use ranks and category arrays as input
 * 1. Form a deck of playing cards
 * 2. Shuffle all the cards
 * 3. Write a function that takes inputs as number of players and number of cards to be distributed to each player
 * 4. Consider default value for maximum cards that can be divided is 5
 * 5. Once the cards are distributed calculate the sum of all the ranks with each player
 * 6. Find the maximum among those sum.
 */

/* import _ from 'lodash'; */

const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const category = ["H", "C", "S", "D"];
const cardValue = {
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

const getDeck = () => {
  const deck = [];
  for (let i = 0; i < category.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push(ranks[j] + category[i]);
    }
  }
  return deck;
};

/* alternate logic to shuffle the cards other than lodash */
const shuffleAllCards = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
  }
  console.log(deck);
  return deck;
};

const getPlayerCards = (players, maxCards = 5) => {
  const allCards = getDeck();
  /* console.log("Unshuffled Cards", allCards); */

  /* const shuffledCards = shuffleAllCards(allCards); */
  const shuffledCards = _.shuffle(getDeck());
  /* console.log("Shuffled Cards", shuffledCards); */

  const playerCards = [];
  for (let player = 0; player < players; player++) {
    playerCards[player] = [];
  }

  for (let i = 0; i < shuffledCards.length; i++) {
    const position = i % players;
    if (playerCards[position].length === maxCards) {
      break;
    }
    playerCards[position] = playerCards[position].concat(shuffledCards[i]);
  }
  // console.log('distributionList', playerCards);
  return playerCards;
};

const getMaxAmongPlayers = (playerDecks) => {
  const counts = _.map(playerDecks, (deck) =>
    _.reduce(
      deck,
      (acc, card, index) => {
        let value = 0;
        if (
          card[0] === "J" ||
          card[0] === "Q" ||
          card[0] === "K" ||
          card[0] === "A"
        ) {
          value = cardValue[card[0]];
        } else {
          value = +card[0];
        }
        // console.log('cards', card, value);
        return acc + value;
      },
      0
    )
  );
  return counts;
};

const getMaxCount = (players, maxCards) => {
  const playerCards = getPlayerCards(players, maxCards);
  const counts = getMaxAmongPlayers(playerCards);
  // console.log('counts', counts);
  return _.max(counts);
};

console.log("Max count", getMaxCount(2, 13));
console.log("Max count", getMaxCount(5, 5));
console.log("Max count", getMaxCount(3, 6));
console.log("Max count", getMaxCount(4, 13));
