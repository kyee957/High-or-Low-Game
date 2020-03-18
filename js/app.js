


// Each of the two players are given 3 cards from a standard deck and a deck of cards


// Players must decide if their mystery card will be higher or lower 

// Players take turn when a player loses/wins a round. 

// If a player guesses incorrectly, they must restart the round they are currently in. 

// If a player guesses correctly on all 3 cards show on the table, 
// they will go onto the next round. 

// Game ends when a player is able to pass a total of 3 rounds.


// create standard deck of cards
const myDeck = [
  {
    name: "spades-two", //spades
    value: 2
  }, {
    name: "spades-three",
    value: 3
  }, {
    name: "spades-four",
    value: 4
  }, {
    name: "spades-five",
    value: 5
  }, {
    name: "spades-six",
    value: 6
  }, {
    name: "spades-seven",
    value: 7
  }, {
    name: "spades-eight",
    value: 8
  }, {
    name: "spades-nine",
    value: 9
  }, {
    name: "spades-ten",
    value: 10
  }, {
    name: "spades-jack",
    value: 11
  }, {
    name: "spades-queen",
    value: 12
  }, {
    name: "spades-king",
    value: 13
  }, {
    name: "spades-ace",
    value: 14
  }, {       
    name: "hearts-two", // Hearts
    value: 2
  }, {
    name: "hearts-three",
    value: 3
  }, {
    name: "hearts-four",
    value: 4
  }, {
    name: "hearts-five",
    value: 5
  }, {
    name: "hearts-six",
    value: 6
  }, {
    name: "hearts-seven",
    value: 7
  }, {
    name: "hearts-eight",
    value: 8
  }, {
    name: "hearts-nine",
    value: 9
  }, {
    name: "hearts-ten",
    value: 10
  }, {
    name: "hearts-jack",
    value: 11
  }, {
    name: "hearts-queen",
    value: 12
  }, {
    name: "hearts-king",
    value: 13
  }, {
    name: "hearts-ace",
    value: 14
  }, {
    name: "diamonds-two", // Diamonds
    value: 2
  }, {
    name: "diamonds-three",
    value: 3
  }, {
    name: "diamonds-four",
    value: 4
  }, {
    name: "diamonds-five",
    value: 5
  }, {
    name: "diamonds-six",
    value: 6
  }, {
    name: "diamonds-seven",
    value: 7
  }, {
    name: "diamonds-eight",
    value: 8
  }, {
    name: "diamonds-nine",
    value: 9
  }, {
    name: "diamonds-ten",
    value: 10
  }, {
    name: "diamonds-jack",
    value: 11
  }, {
    name: "diamonds-queen",
    value: 12
  }, {
    name: "diamonds-king",
    value: 13
  }, {
    name: "diamonds-ace",
    value: 14
  }, {
    name: "clubs-two", // Clubs
    value: 2
  }, {
    name: "clubs-three",
    value: 3
  }, {
    name: "clubs-four",
    value: 4
  }, {
    name: "clubs-five",
    value: 5
  }, {
    name: "clubs-six",
    value: 6
  }, {
    name: "clubs-seven",
    value: 7
  }, {
    name: "clubs-eight",
    value: 8
  }, {
    name: "clubs-nine",
    value: 9
  }, {
    name: "clubs-ten",
    value: 10
  }, {
    name: "clubs-jack",
    value: 11
  }, {
    name: "clubs-queen",
    value: 12
  }, {
    name: "clubs-king",
    value: 13
  }, {
    name: "clubs-ace",
    value: 14
  }
]


//first steps 
//build out the player class
//		-what does every player have that stays the same?
//		-what does each player have that is unique?
//		-does each player need to have a property that tells if it is their turn or not?


//Next steps
//Build out game functionality, in small pieces, get it working in the console.

//maybe you have a boolean k:v pair that says if the game is active or not
//so that it switches to active when the start button is pressed
//and then when it's active, you show the cards. 

//Hint: make a class in your css called 'hidden' and make it visually hide anything
//	with that class.


//buttons that show up for each card. So maybe they're all part of the same div? or whatever helps you get the info of the button, sending to the associated card.
class Player {
	constructor(name) {
		this.name = name;
	}


}







//start button
let playing = false;
let startButton;



//object
const game = {

	
	playerOne: {
		score: 0,
		hand: []
	},

	playerTwo: {
		score: 0,
		hand: []
	},

	// shuffledDeck: [],
	rounds: 0,
	match: 0,
	player: [],
	deck: Array.from(myDeck), //insert deck of cards into game object






addName: function(name) {
    const newName = new Player(name);
    this.player.push(newContact);
    const newPlayerName = document.createElement("li");
    newPlayerName.classList.add = "name";
    newPlayerName.innerText = `Name: ${name}`;
    const ul = document.querySelector("#name-entry");
    ul.append(newPlayerName);
    
  },



//3 draw cards to players
drawCards: function () {
    for(let i = 0; i < 3; i++){ //draw 3 cards to playerOne and playerTwo, randomize
      let drawCardForPlayerOne = (Math.floor(Math.random() * this.deck.length))
      console.log('random card::')
      console.log(drawCardForPlayerOne)
      console.log(this.deck[drawCardForPlayerOne])
      this.playerOne.hand.push(this.deck[drawCardForPlayerOne])
        this.deck.splice(drawCardForPlayerOne, 1)
   
    }
      //draws playerOne 3 random cards from deck
      alert(`playerOne gets handed ${this.playerOne.hand[0].name}, ${this.playerOne.hand[1].name}, and ${this.playerOne.hand[2].name}`)
    },























}





console.log(game.drawCards());






































