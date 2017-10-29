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
  // TODO
  templateUrl: 'src/templates/tableTop.html'
});