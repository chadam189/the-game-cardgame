angular.module('video-player')

.component('app', {
  // TODO
  bindings: {
    // all params passed into new instances of 'app'
    // <
    // @
  },
  controller: function (youTube) {
    
    this.deck = "deck is displayed";
    
    this.startGame = () => {
      // resets global variables
        // deck
        // piles 1-4
      // calls shuffle
      // deals out hand
    };
    
    this.shuffle = () => {
      // randomize the deck for starting the game
    };
    
    this.dealHand = () => {
      // deal hand to player 
      // used for both init and during normal game play
    };

  },
  templateUrl: 'src/templates/app.html',
});
