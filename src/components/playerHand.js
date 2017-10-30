angular.module('the-game')
.component('playerHand', {

  bindings: {
    playerHand: '<'
  },
  
  controller: function () {
    this.highlightCard = (index) => {
      console.log('clicked on the #' + (index + 1) + ' card in your hand!');
    };
  },
  
  templateUrl: 'src/templates/playerHand.html'
});
