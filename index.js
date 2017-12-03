/**
 * buildDeck
 * @return {array} [52 cards]
 */
const suits = ['♢', '♤', '♡', '♧'];
const cards = [2,3,4,5,6,7,8,9,10,'J','K','Q','A']
const buildDeck = () => {
	return [].concat.apply([], cards.map(card => (
	 suits.map(suit => ( card + suit ))
	)))
}
/**
 * shuffle
 * @param  {array} array
 * @return {array}
 */
const shuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array
}

let deck = buildDeck()
deck = shuffle(deck)
// @todo set number of players
// assign bankroll, deal 2 cards each
// pull money based on player position: pos 1|-1BR, pos 2|-2BR, pos 3|(ante,fold)....
// pick 3 cards from top
// pull check|best from each player, call,raise
// 
let procceed = true
let iterations = 0
let numOfplayers = 6
let players = []

function randomCards(deck) {
	let index = Math.floor(Math.random() * deck.length)
	let returnAble = [
		deck[index],
		deck
	]
	deck.splice(index, 1)
	return returnAble
}

function setupGame() {
	for (var i = 0; i < numOfplayers; i++) {
		players.push({ name: `Player:${i + 1}`, bankroll : 100,  cards: [randomCards(deck)[0], randomCards(deck)[0]] })
	}
}

function calculatePlayerProbabilities() {
	let cardsInPlay = []
	players.map(player => (
		cardsInPlay.push(player.cards)
	))
	cardsInPlay = [].concat.apply([], cardsInPlay);
	console.log(cardsInPlay.length)
	// get # pair
	// get # suit
	// get # straight
	// get # flush
	// get # 3
	// get # 4
}

setupGame()
calculatePlayerProbabilities()
console.log(players);