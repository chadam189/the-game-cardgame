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
    this.gameHasStarted = true;
    this.cardsRemaining = 98;
    this.playerHand = [];
    this.piles = [1, 1, 100, 100];
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
      this.piles = [1, 1, 100, 100];
      // deals out hand
      this.playerHand = [];
      this.dealHand();
      this.gameHasStarted = true;
    };
    
    this.dealHand = () => {
      // deal hand to player 
      for (var i = this.playerHand.length; (i < this.handLimit && !this.isDrawPileEmpty); i++) {
        var card = this.drawCard();
        this.playerHand.push(card);
        this.cardsRemaining--;
        this.playerHand.sort(function(a, b) { return a - b; });
        this.drawPile[card - 2] = 'played';
        // this.isDrawPileEmpty = this.getDrawPileStatus();
      }
    };
    
    this.drawCard = () => {
      var newCard = Math.floor(Math.random() * 97) + 2;
      while (this.drawPile[newCard - 2] === 'played') {
        newCard = Math.floor(Math.random() * 97) + 2;
      }
      return newCard;
    };
    
    // this.playCard = (cardValue, pileChoice) => {
    //   var cardIndex = this.playerHand.indexOf(cardValue);
      
    //   if (this.playerHand[cardIndex] < this.piles[descendingPile1]) {
    //     descendingPile1 = this.playerHand[cardIndex];
    //     this.playerHand.splice(cardIndex, 1);
    //   } else if (this.playerHand[cardIndex] === descendingPile1 + 10) {
    //     descendingPile1 = this.playerHand[cardIndex] + 10;
    //     this.playerHand.splice(cardIndex, 1);
    //   } else {
    //     console.log('This card can\'t be played on this pile...it\'s too high!');
    //     return false;
    //   }
      
    //   if (pileChoice === 1) {
    //     if (this.playerHand[cardIndex] < descendingPile1) {
    //       descendingPile1 = this.playerHand[cardIndex];
    //       this.playerHand.splice(cardIndex, 1);
    //     } else if (this.playerHand[cardIndex] === descendingPile1 + 10) {
    //       descendingPile1 = this.playerHand[cardIndex] + 10;
    //       this.playerHand.splice(cardIndex, 1);
    //     } else {
    //       console.log('This card can\'t be played on this pile...it\'s too high!');
    //       return false;
    //     }
    //   }
    //   if (pileChoice === 2) {
    //     if (this.playerHand[cardIndex] > ascendingPile1) {
    //       ascendingPile1 = this.playerHand[cardIndex];
    //       this.playerHand.splice(cardIndex, 1);
    //     } else if (this.playerHand[cardIndex] === ascendingPile1 - 10) {
    //       ascendingPile1 = this.playerHand[cardIndex] - 10;
    //       this.playerHand.splice(cardIndex, 1);
    //     } else {
    //       console.log('This card can\'t be played on this pile...it\'s too low!');
    //       return false;
    //     }
    //   }

    //   return true;
    // };

  },
  templateUrl: 'src/templates/app.html',
});










