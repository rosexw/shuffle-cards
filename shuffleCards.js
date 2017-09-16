//Shuffle Cards
//First way: Take a card from a deck then put it in a new array, and do this for each Cards. Remember which card you took so you don't take them again.
//This first way is simple but may be slow in big deck of cards
//Second way: Take two cards and swap their positions in the array. Remember where these are so you don't take them again.
//Third way: Fisher-Yates algorithm, linear time O(n)

//The first way is drawn out below:
//set an array to equal all the Cards
//take a card and push this card into a new array

function shuffle(cards) {
  var shuffled = [];
  while (cards.length > 0) {
    //take random card from cards array
    var randomIndex = Math.floor(Math.random() * cards.length);
    //push into new array, shuffled
    shuffled.push(cards[randomIndex]);
    //splice card out
    cards.splice(randomIndex, 1);
  }
  return shuffled;
}

//an example here, enter any cards in this function parameters.
console.log(shuffle(["1 Diamond", "2 Spade", "3 Heart", "4 Club"]));
