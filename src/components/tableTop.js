angular.module('the-game')

.component('tableTop', {
  
  bindings: {
    drawPile: '<',
    ascendingPile1: '<',
    ascendingPile2: '<',
    descendingPile1: '<',
    descendingPile2: '<',
    startGameOver: '<',
    playerHand: '<'
    
  },
  
  controller: function () {
    this.displayDeck = function () {
      
    };
  },
  
  templateUrl: 'src/templates/tableTop.html'
});