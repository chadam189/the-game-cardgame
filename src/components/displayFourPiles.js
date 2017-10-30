angular.module('the-game')
.component('displayFourPiles', {

  bindings: {
    piles: '<',
    drawPile: '<'
  },
  
  controller: function () {
    this.highlightCard = (index) => {
      console.log('clicked on the #' + (index + 1) + ' card in your hand!');
    };
  },
  
  templateUrl: 'src/templates/displayFourPiles.html'
});
