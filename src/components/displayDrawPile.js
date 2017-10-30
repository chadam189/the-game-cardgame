angular.module('the-game')
.component('displayDrawPile', {
  // TODO
  bindings: {
    drawPile: '<'
  },
  
  controller: function () {
    this.displayedDrawPile = [];
    
    this.generateDrawPileDisplay = function () {
      this.displayedDrawPile = [];
      for (var i = 0; i < 10; i++) {
        var row = [];
        for (var j = 0; j < 10; j++) {
          if ((i * 10 + j) < 2 || (i * 10 + j) > 99) {
            row.push('--');
          } else if (i === 0) {
            row.push(' ' + j + ' ');
          } else {
            row.push((i * 10 + j).toString());
          }
        }
        this.displayedDrawPile.push(row);
      }
      
    };
    
    this.generateDrawPileDisplay2 = function () {
      this.displayedDrawPile = [];
      for (var i = 0; i < 10; i++) {
        if (i === 0) {
          this.displayedDrawPile.push(this.drawPile.slice(0, 9));
        } else {
          this.displayedDrawPile.push(this.drawPile.slice((i * 10) - 1, (10 * i) + 9));
        }
        
        // for (var j = 0; j < 10; j++) {
        //   if ((i * 10 + j) < 2 || (i * 10 + j) > 99) {
        //     row.push('--');
        //   } else if (i === 0) {
        //     row.push(' ' + j);
        //   } else {
        //     row.push((i * 10 + j).toString());
        //   }
        // }
        // this.displayedDrawPile.push(row);
      }
      
    };
    
    this.updateDrawPileDisplay = function () {
      
    };
  },
  
  templateUrl: 'src/templates/displayDrawPile.html'
});
