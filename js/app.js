
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
    value: 2,
    img: "2S.jpeg"
  }, {
    name: "spades-three",
    value: 3,
    img: "3S.jpeg"

  }, {
    name: "spades-four",
    value: 4,
    img: "4S.jpeg"

  }, {
    name: "spades-five",
    value: 5,
    img: "5S.jpeg"

  }, {
    name: "spades-six",
    value: 6,
    img: "6S.jpeg"

  }, {
    name: "spades-seven",
    value: 7,
    img: "7S.jpeg"

  }, {
    name: "spades-eight",
    value: 8,
    img: "8S.jpeg"

  }, {
    name: "spades-nine",
    value: 9,
    img: "9S.jpeg"

  }, {
    name: "spades-ten",
    value: 10,
    img: "10S.jpeg"

  }, {
    name: "spades-jack",
    value: 11,
    img: "JS.jpeg"

  }, {
    name: "spades-queen",
    value: 12,
    img: "QS.jpeg"

  }, {
    name: "spades-king",
    value: 13,
    img: "KS.jpeg"

  }, {
    name: "spades-ace",
    value: 14,
    img: "AS.png"

  }, {       
    name: "hearts-two", // Hearts
    value: 2,
    img: "2H.jpeg"

  }, {
    name: "hearts-three",
    value: 3,
    img: "3H.jpeg"

  }, {
    name: "hearts-four",
    value: 4,
    img: "4H.jpeg"

  }, {
    name: "hearts-five",
    value: 5,
    img: "5H.jpeg"

  }, {
    name: "hearts-six",
    value: 6,
    img: "6H.jpeg"

  }, {
    name: "hearts-seven",
    value: 7,
    img: "7H.jpeg"

  }, {
    name: "hearts-eight",
    value: 8,
    img: "8H.jpeg"

  }, {
    name: "hearts-nine",
    value: 9,
    img: "9H.jpeg"

  }, {
    name: "hearts-ten",
    value: 10,
    img: "10H.jpeg"

  }, {
    name: "hearts-jack",
    value: 11,
    img: "JH.jpeg"

  }, {
    name: "hearts-queen",
    value: 12,
    img: "QH.jpeg"

  }, {
    name: "hearts-king",
    value: 13,
    img: "KH.jpeg"

  }, {
    name: "hearts-ace",
    value: 14,
    img: "AH.jpeg"

  }, {
    name: "diamonds-two", // Diamonds
    value: 2,
    img: "2D.png"

  }, {
    name: "diamonds-three",
    value: 3,
    img: "3D.jpeg"

  }, {
    name: "diamonds-four",
    value: 4,
    img: "4D.jpeg"

  }, {
    name: "diamonds-five",
    value: 5,
    img: "5D.jpeg"

  }, {
    name: "diamonds-six",
    value: 6,
    img: "6D.jpeg"

  }, {
    name: "diamonds-seven",
    value: 7,
    img: "7D.jpeg"

  }, {
    name: "diamonds-eight",
    value: 8,
    img: "8D.jpeg"

  }, {
    name: "diamonds-nine",
    value: 9,
    img: "9D.jpeg"

  }, {
    name: "diamonds-ten",
    value: 10,
    img: "10D.jpeg"

  }, {
    name: "diamonds-jack",
    value: 11,
    img: "JD.png"

  }, {
    name: "diamonds-queen",
    value: 12,
    img: "QD.jpeg"

  }, {
    name: "diamonds-king",
    value: 13,
    img: "KD.jpeg"

  }, {
    name: "diamonds-ace",
    value: 14,
    img: "AD.png"

  }, {
    name: "clubs-two", // Clubs
    value: 2,
    img: "2C.jpeg"

  }, {
    name: "clubs-three",
    value: 3,
    img: "3C.jpeg"

  }, {
    name: "clubs-four",
    value: 4,
    img: "4C.jpeg"

  }, {
    name: "clubs-five",
    value: 5,
    img: "5C.jpeg"

  }, {
    name: "clubs-six",
    value: 6,
    img: "6C.jpeg"

  }, {
    name: "clubs-seven",
    value: 7,
    img: "7C.jpeg"

  }, {
    name: "clubs-eight",
    value: 8,
    img: "8C.jpeg"

  }, {
    name: "clubs-nine",
    value: 9,
    img: "9C.jpeg"

  }, {
    name: "clubs-ten",
    value: 10,
    img: "10C.jpeg"

  }, {
    name: "clubs-jack",
    value: 11,
    img: "JC.jpeg"

  }, {
    name: "clubs-queen",
    value: 12,
    img: "QC.gif"

  }, {
    name: "clubs-king",
    value: 13,
    img: "KC.jpeg"

  }, {
    name: "clubs-ace",
    value: 14,
    img: "AC.png"

  }
]


//first steps 
//build out the player class
//    -what does every player have that stays the same?
//    -what does each player have that is unique?
//    -does each player need to have a property that tells if it is their turn or not?


//Next steps
//Build out game functionality, in small pieces, get it working in the console.

//maybe you have a boolean k:v pair that says if the game is active or not
//so that it switches to active when the start button is pressed
//and then when it's active, you show the cards. 

//Hint: make a class in your css called 'hidden' and make it visually hide anything
//  with that class.


//buttons that show up for each card. So maybe they're all part of the same div? or whatever helps you get the info of the button, sending to the associated card.
class Player {
  constructor(name) {
    this.name = name
    this.score = 0
    this.hand = []
    this.turn = false
  }


}
//at the start of the game, you will changeplayer one's turn to truelike this
// Fatima.turn = true 

//then at the end of their turn it will become false like this
// Fatima.turn = false
//Then player 2 is up, you'll need to change their turn value to true.
//Nate.turn = true


//game.changeTurn is going to be a function that switches the boolean value of the current, and the next playe

// const playerOne = new Player("Fatima")
// const playerTwo = new Player("Nate")
// console.log(playerOne);
// console.log("Fatima's turn is \n", playerOne.turn);

// playerOne.turn = true
// console.log("NOW, Fatima's turn is \n", playerOne.turn);

// console.log(playerTwo);




//game object
const game = {
  playing: false,
  

  rounds: 0,
  match: 0,
  //players: [], //use this if there are many
  playerOne: null,
  playerTwo: null,
  activeCard: null,

  deck: Array.from(myDeck), //insert deck of cards into game object

  whoseTurnPlayer: 0,

  
// track how many phases each player has completed

// this.players[0].name
//inside a loop you might say this.players[i].name



  start: function() {
    console.log("Start button was clicked")
    // set phase

          
    this.putCardsOnHand(); // deal 3 cards to player 0
  
    
    // deal/set right card -- this needs to be tracked

    // say "click high low to guess"
    
    // show buttons 
      // cycle through cards in this phase -- nextCard() method?

      //find player from name
  },

  activateCard: function() {
    //display a deck (could be a single card) face down 
    const hiddenCardOnDeck = document.querySelector("#hidden-card")
    const revealCardOnDeck = document.createElement("img");
          revealCardOnDeck.src = `images/${this.deck[drawCardsForPlayr].img}`

          hiddenCardOnDeck.append(revealCardOnDeck);

  },

      //find player from name
  nextPlayer: function () {
    // come back to this later
  },



// Method for adding players name into the game
  addNamePlayerOne: function(name) {
      const newPlyr = new Player(name);
      this.playerOne = newPlyr;
      
      const newPlayerName = document.createElement("li");
      newPlayerName.classList.add = "name";

      console.log(`${name}`)
      newPlayerName.innerText = `${name}`;
      const ul = document.querySelector("#name-entry");
      ul.append(newPlayerName);
    
  },





  // Method that displays 3 random cards on the table for players to compare their mystery card with.
  putCardsOnHand: function (playerName) {
      for(let i = 0; i < 3; i++){ //draw 3 cards to playerOne and playerTwo, randomize
          let drawCardsForPlayr = (Math.floor(Math.random() * this.deck.length))
          console.log('random card:')
          console.log(drawCardsForPlayr)
          console.log(this.deck[drawCardsForPlayr])
          //work on nextPlayer to return the player instance from the name given

          this.playerOne.hand.push(this.deck[drawCardsForPlayr])

          //display those three cards face up
          //after the cards are displayed style with css

          //select the card-container div by id
          const cardOnTable = document.querySelector("#card-container")

//create an image tag to be appended with this.deck[drawCardsForPlayr]
          const cardOneOnTable = document.createElement("img");
          cardOneOnTable.src = `images/${this.deck[drawCardsForPlayr].img}`
          cardOneOnTable.classList.add("threeCards")
          cardOnTable.append(cardOneOnTable);
          this.deck.splice(drawCardsForPlayr, 1)

          //append the image to the card container

      }
  },





  // Method allows player to draw one card from the deck
  drawMysteryCard: function (playerIndex) {
      for(let i = 0; i < 1; i++){ //loop that draws one card from deck
          let oneCardFrmDeck = (Math.floor(Math.random() * this.deck.length)) // random card
          console.log('you drew card:')
          console.log(oneCardFrmDeck)
          console.log(this.deck[oneCardFrmDeck])
          this.activeCard = (this.deck[oneCardFrmDeck])


    }

  },

  processCardGuessing: function (event) {
      console.log(event.target.id);
      if (event.target.id === "#Lhigh-button") {
        if (this.playerOne.hand[0].value > this.activeCard.value){
          console.log("correct");
        } else {
          console.log("incorrect");
        }
        console.log(this.playerOne.hand[0])
        console.log(this.activeCard); 
      } 
  }





}




// Event listeners 
const startButton = document.querySelector("#start-button")
startButton.addEventListener("click", (event) => {
  game.start()
});

// -------------------------------------------------------------------------

// Players name appearing on screen

const addPlayerButton = document.querySelector("#name-adding-form")

addPlayerButton.addEventListener("submit", (event) => {
  const firstName = document.querySelector("#firstName");
  //console.log(firstName.value)
  
  //console.log("this is the event target from the name form\n", event.target);
  game.addNamePlayerOne(firstName.value)
  event.preventDefault();
});

// -------------------------------------------------------------------------

// High and Low buttons draw one card from the deck


// Left card

const leftHighButtonClicked = document.querySelector("#Lhigh-button")

leftHighButtonClicked.addEventListener("click", (event) => {
  //const firstName = document.querySelector("#firstName");
  console.log("high button was clicked from left card")
  game.processCardGuessing(event)
  game.drawMysteryCard()
  event.preventDefault();
});



const leftLowButtonClicked = document.querySelector("#Llow-button")

leftLowButtonClicked.addEventListener("click", (event) => {
  //const firstName = document.querySelector("#firstName");
  console.log("low button was clicked from left card")
  
  game.drawMysteryCard()
  event.preventDefault();
});


// Middle card 


const middleHighButtonClicked = document.querySelector("#Mhigh-button")

middleHighButtonClicked.addEventListener("click", (event) => {
  //const firstName = document.querySelector("#firstName");
  console.log("high button was clicked from middle card")
  
  game.drawMysteryCard()
  event.preventDefault();
});



const middleLowButtonClicked = document.querySelector("#Mlow-button")

middleLowButtonClicked.addEventListener("click", (event) => {
  //const firstName = document.querySelector("#firstName");
  console.log("low button was clicked from middle card")
  
  game.drawMysteryCard()
  event.preventDefault();
});


// Right card


const rightHighButtonClicked = document.querySelector("#Rhigh-button")

rightHighButtonClicked.addEventListener("click", (event) => {
  //const firstName = document.querySelector("#firstName");
  console.log("high button was clicked from right card")
  
  game.drawMysteryCard()
  event.preventDefault();
});



const rightLowButtonClicked = document.querySelector("#Rlow-button")

rightLowButtonClicked.addEventListener("click", (event) => {
  //const firstName = document.querySelector("#firstName");
  console.log("low button was clicked from right card")
  
  game.drawMysteryCard()
  event.preventDefault();
});














//////////////////////////
//BELOW THE GAME OBJECT
//PUT EVENT LISTENERS
//one for the form input,
//eventually you'll need others for other parts of the game. e.g. start button and other stuff




// add event listener
// use class to create objects
// push those to game player Array
// use array to compare values to each player


// High or low button functioning
// Players can draw cards from deck
// Moving from phase to phase




