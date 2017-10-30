angular.module('the-game')
.component('navBar', {

  bindings: {
    startGameOver: '<'
  },
  
  // controller: function () {
  //   this.highlightCard = (index) => {
  //     console.log('clicked on the #' + (index + 1) + ' card in your hand!');
  //   };
  // },
  
  templateUrl: 'src/templates/navBar.html'
});
