
// =============================================
//
// Array of standard deck of cards
//
// =============================================
const myDeck = [
  {
    name: "spades-two", //spades-------------------------------
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
    name: "hearts-two", // Hearts -------------------------------
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
    name: "diamonds-two", // Diamonds ---------------------------
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
    name: "clubs-two", // Clubs -------------------------------
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



// =============================================
//
// Create player objects
//
// =============================================

// Build out the player class
// What does every player have that stays the same?
// What does each player have that is unique?
// Does each player need to have a property that tells if it is their turn or not?

class Player {
  constructor(name) {
    this.name = name
    this.score = 0
    this.hand = []
  }
}




// =============================================
// 
// Game object 
// 
// =============================================
const game = {
  playerReady: true,
  activePlayer: "", //1 is p1 2 is p2
  rounds: 0,
  playerOne: null,
  playerTwo: null,
  activeCard: null,
  correctGuess: false,
  deck: Array.from(myDeck), //insert deck of cards into game object

// whoseTurnPlayer: playerOne,


// =============================================
// 
// Begin phases 
// 
// =============================================

  start: function() {
    console.log("Start button was clicked")
          
    this.putCardsOnHand("playerOne"); 

    this.drawMysteryCard();
    this.activePlayer = "playerOne";
    // console.log("this is scoreP1 \n", scoreP1);
    // console.log("this is scoreP2 \n", scoreP2);
  },




// =============================================
// 
// Method for adding players name into the game  
// 
// =============================================

  addNamePlayerOne: function(name) {
      const newPlyr1 = new Player(name);
      this.playerOne = newPlyr1;
      
      const newPlayerOneName = document.createElement("li");
      newPlayerOneName.classList.add = "name";

      console.log(`${name}`)
      newPlayerOneName.innerText = `${name}`;
      const ul = document.querySelector("#name-entry1");
      ul.append(newPlayerOneName);
    
  },




  addNamePlayerTwo: function(name) {
      const newPlyr2 = new Player(name);
      this.playerTwo = newPlyr2;
      
      const newPlayerTwoName = document.createElement("li");
      newPlayerTwoName.classList.add = "name";

      console.log(`${name}`)
      newPlayerTwoName.innerText = `${name}`;
      const ul = document.querySelector("#name-entry2");
      ul.append(newPlayerTwoName);
    

  },


// =============================================
// 
// Method that displays 3 random cards on players hand to compare their mystery card/ card in deck with.
// 
// =============================================


  putCardsOnHand: function (playerName) {

      console.log(this[playerName]) 
      this[playerName].hand = [];
      const cardOnTable = document.querySelector("#card-container")
        cardOnTable.innerHTML = ""

      console.log(this[playerName].hand);
      for(let i = 0; i < 3; i++){ //draw 3 cards to playerOne and playerTwo, randomize
          let drawCardsForPlayr = (Math.floor(Math.random() * this.deck.length))
          console.log('random card:')
          console.log(drawCardsForPlayr)
          console.log(this.deck[drawCardsForPlayr])
          //work on nextPlayer to return the player instance from the name given

          this[playerName].hand.push(this.deck[drawCardsForPlayr])
          console.log(this[playerName]);
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



// =============================================
// 
// Method allows player to receive one card from the deck
// 
// =============================================




  drawMysteryCard: function (playerIndex) {
      for(let i = 0; i < 1; i++){ //loop that draws one card from deck
          let oneCardFrmDeck = (Math.floor(Math.random() * this.deck.length)) // random card
          console.log('your mystery card:')
          console.log(oneCardFrmDeck)
          console.log(this.deck[oneCardFrmDeck])
          this.activeCard = (this.deck[oneCardFrmDeck])

    }
  },




// =============================================
// 
// Player clicks on H/L buttons to guess card on the deck 
// 
// =============================================




  processCardGuessing: function (event) {
      console.log(event.target.id);
      console.log(this);
      console.log(this[this.activePlayer]);
      console.log(this[this.activePlayer].hand);
      if (event.target.id === "Lhigh-button") { //LEFT CARD
        if (this[this.activePlayer].hand[0].value >= this.activeCard.value){
          this[this.activePlayer].hand[0].correctGuess = true;
          console.log("correct");
        } else {
          console.log("incorrect");
          this.playerLost();
        } 
      } 
      if (event.target.id === "Llow-button") {
        if (this[this.activePlayer].hand[0].value <= this.activeCard.value){
          this[this.activePlayer].hand[0].correctGuess = true;
          console.log("correct");

        } else {
          console.log("incorrect");
          this.playerLost();

        }
      } 
      if (event.target.id === "Mhigh-button") { //MIDDLE CARD
        if (this[this.activePlayer].hand[1].value > this.activeCard.value){
          this[this.activePlayer].hand[1].correctGuess = true;
          console.log("correct");
        } else {
          console.log("incorrect");
          this.playerLost();

        }
      } 
      if (event.target.id === "Mlow-button") {
        if (this[this.activePlayer].hand[1].value < this.activeCard.value){
          this[this.activePlayer].hand[1].correctGuess = true;
          console.log("correct");

        } else {
          console.log("incorrect");
          this.playerLost();

        } 
      }
        if (event.target.id === "Rhigh-button") { //RIGHT CARD
          if (this[this.activePlayer].hand[2].value > this.activeCard.value){
          this[this.activePlayer].hand[2].correctGuess = true;
          console.log("correct");

          } else {
            console.log("incorrect");
            this.playerLost();

          }
      } 
        if (event.target.id === "Rlow-button") {
          if (this[this.activePlayer].hand[2].value < this.activeCard.value){
          this[this.activePlayer].hand[2].correctGuess = true;
          console.log("correct");
          } else {
            console.log("incorrect");
            this.playerLost();

          } 
      }


           this.didPlayerWin();
  },

// =============================================
// 
// Reveal mystery card if player guesses incorrectly
// 
// =============================================




  activateCard: function() {
    //reveal card after 3 cards are guessed, resets for next player 
    const hiddenCardOnDeck = document.querySelector("#card-facedown")
    //const revealCardOnDeck = document.createElement("img");
    // revealCardOnDeck.src = `images/${this.deck[drawCardsForPlayr].img}`
    console.log("this is the active card", this.activeCard);
    hiddenCardOnDeck.src = `images/${this.activeCard.img}`;
    // `<img id="card-facedown" class="hidden-card" src="images/${this.activeCard.img}" alt="hidden-card">`
    //hiddenCardOnDeck.append(revealCardOnDeck);
    // if they lost (since they saw the card), switch turns
  },



// =============================================
// 
// Method that determines if player wins or loses a round
// 
// =============================================

  didPlayerWin: function () {
    let count = 0
    for(let i = 0; i < this.playerOne.hand.length; i++ ) {
      if (this.playerOne.hand[i].correctGuess === true) {
        count++
      }
    }

    if (count === this.playerOne.hand.length) {
      alert("You won the game!")
      console.log("player wins round!");

    }

  },


  playerLost: function () {
    console.log("player has lost");
    this.activateCard();
    
      // const cardOnTable = document.querySelector("#card-container")
      // cardOnTable.innerHTML = ""
    
    // console.log("this is the query selector", cardOnTable);
    // setTimeout(function() {
    //   clearInnerHTML()},1000);
  
    this.nextPlayer();

    this.drawMysteryCard();

    alert("Guess was wrong. Next player's turn!")


      
},




  playerReady: function () {
    this.playerReady = false;
  },




// =============================================
// 
// Switch to next player if guessed incorrectly
// 
// =============================================

      //find player from name
  nextPlayer: function () {
    if(this.activePlayer === "playerOne"){
      this.activePlayer = "playerTwo"
      this.putCardsOnHand ("playerTwo")

    } else if(this.activePlayer === "playerTwo"){
      this.activePlayer = "playerOne"
      this.putCardsOnHand ("playerOne")

    } else {
      this.activePlayer = ""
    }
    setTimeout(function() {
      game.flipCardOver()},5000);
  },

  flipCardOver: function () {
    const flippedCard = document.querySelector("#card-facedown")
    
    flippedCard.src = `images/card-facedown.jpeg`;
  },

//at the start of the game, you will changeplayer one's turn to truelike this
// Fatima.turn = true 

//then at the end of their turn it will become false like this
// Fatima.turn = false
//Then player 2 is up, you'll need to change their turn value to true.
//Nate.turn = true

// const playerOne = new Player("Fatima")
// const playerTwo = new Player("Nate")
// console.log(playerOne);
// console.log("Fatima's turn is \n", playerOne.turn);

// playerOne.turn = true
// console.log("NOW, Fatima's turn is \n", playerOne.turn);

// console.log(playerTwo);

//game.changeTurn is going to be a function that switches the boolean value of the current, and the next playe



// =============================================
// 
// A player guesses 3 cards correctly = game is completed
// 
// =============================================


//   winner: function(){
//          if(this.playerOne.hand[0].correctGuess === true & this.playerOne.hand[1].correctGuess === true & this.playerOne.hand[2].correctGuess === true) {
//           console.log(`${name} wins the game!`);
//         } else {
//           console.log('next player is up');
//         }
    // }


}


// =============================================
// 
// Event listeners for start button to hand out 3 cards to player
// 
// =============================================


const startButton = document.querySelector("#start-button")
startButton.addEventListener("click", (event) => {
  game.start()
});

// =============================================
// 
// Event listeners for printing player name on browser
// 
// =============================================

// const addPlayerOneButton = document.querySelector("#name-adding-form")
const p1Button = document.querySelector("#AddName1")

p1Button.addEventListener("click", (event) => {
  event.preventDefault();
  const firstName1 = document.querySelector("#firstName1");
  
  //console.log("this is the event target from the name form\n", event.target);
  game.addNamePlayerOne(firstName1.value)
});



// const addPlayerTwoButton = document.querySelector("#name-adding-form")
const p2Form = document.querySelector("#p2Form")
p2Form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName2 = document.querySelector("#firstName2");
  
  //console.log("this is the event target from the name form\n", event.target);
  game.addNamePlayerTwo(firstName2.value)
});

// -------------------------------------------------------------------------

// =============================================
// 
// Event listeners for H/L buttons to draw one card from the deck
// 
// =============================================


// Left card

const leftHighButtonClicked = document.querySelector("#Lhigh-button")

leftHighButtonClicked.addEventListener("click", (event) => {
  //const firstName = document.querySelector("#firstName");
  console.log("high button was clicked from left card")
  game.processCardGuessing(event)
  // game.drawMysteryCard()
  event.preventDefault();
});



const leftLowButtonClicked = document.querySelector("#Llow-button")

leftLowButtonClicked.addEventListener("click", (event) => {
  //const firstName = document.querySelector("#firstName");
  console.log("low button was clicked from left card")
  game.processCardGuessing(event)

  // game.drawMysteryCard()
  event.preventDefault();
});


// Middle card 


const middleHighButtonClicked = document.querySelector("#Mhigh-button")

middleHighButtonClicked.addEventListener("click", (event) => {
  //const firstName = document.querySelector("#firstName");
  console.log("high button was clicked from middle card")
  game.processCardGuessing(event)
  
  // game.drawMysteryCard()
  event.preventDefault();
});



const middleLowButtonClicked = document.querySelector("#Mlow-button")

middleLowButtonClicked.addEventListener("click", (event) => {
  //const firstName = document.querySelector("#firstName");
  console.log("low button was clicked from middle card")
   game.processCardGuessing(event)
 
  // game.drawMysteryCard()
  event.preventDefault();
});


// Right card


const rightHighButtonClicked = document.querySelector("#Rhigh-button")

rightHighButtonClicked.addEventListener("click", (event) => {
  //const firstName = document.querySelector("#firstName");
  console.log("high button was clicked from right card")
   game.processCardGuessing(event)
 
  // game.drawMysteryCard()
  event.preventDefault();
});



const rightLowButtonClicked = document.querySelector("#Rlow-button")

rightLowButtonClicked.addEventListener("click", (event) => {
  //const firstName = document.querySelector("#firstName");
  console.log("low button was clicked from right card")
  game.processCardGuessing(event)
  
  // game.drawMysteryCard()
  event.preventDefault();
});








