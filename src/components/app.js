angular.module('the-game')

.component('app', {
  // TODO
  bindings: {
    // all params passed into new instances of 'app'
    // <
    // @
  },
  controller: function () {
    
    // this.deck = [];
    this.drawPile = [];
    this.cardsRemaining = 98;
    this.playerHand = [];
    this.ascendingPile1 = 1;
    this.ascendingPile2 = 1;
    this.descendingPile1 = 100;
    this.descendingPile2 = 100;
    this.table = {};
    this.handLimit = 8;
    
    
    this.startGameOver = () => {
      // resets global variables
      // draw pile is reset
      this.drawPile = [];
      for (var i = 2; i <= 99; i++) {
        this.drawPile.push(i);
      }
    
      // piles 1-4
      this.cardsRemaining = 98;
      this.ascendingPile1 = 1;
      this.ascendingPile2 = 1;
      this.descendingPile1 = 100;
      this.descendingPile2 = 100;
      // calls shuffle
      this.playerHand = [];
      // deals out hand
      this.dealHand();
    };
    
    this.dealHand = () => {
      // deal hand to player 
      for (var i = this.playerHand.length; (i < this.handLimit && !this.isDrawPileEmpty); i++) {
        var card = this.drawCard();
        this.playerHand.push(card);
        this.cardsRemaining--;
        this.playerHand.sort(function(a, b) { return a - b; });
        this.drawPile[card - 1] = 'played';
        // this.isDrawPileEmpty = this.getDrawPileStatus();
      }
    };
    
    this.drawCard = () => {
      var newCard = Math.floor(Math.random() * 97) + 2;
      while (this.drawPile[newCard - 1] === '--') {
        newCard = Math.floor(Math.random() * 97) + 2;
      }
      return newCard;
    };
    
    // this.getDrawPileStatus = () => {};

  },
  templateUrl: 'src/templates/app.html',
});

for (var i = 0; i < 100000; i++) {
  var temp = Math.floor(Math.random() * 97) + 2;
  if (temp < 2 || temp > 99) {
    console.log(temp);
  }
}










