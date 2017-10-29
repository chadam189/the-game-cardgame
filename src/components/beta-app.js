// /*
// Goal - to play 1-player version of IDW's "The Game" card Game

// 1. Initialize global variables, including deck, the four piles, and player's hand

// 2. Necessary functions: 

// startGame - resets the game (all global variables are reinitialized to starting values)
// dealHand - deals out a hand to player (either at start or in middle of play)
// newCard - draws a new card (checking against remaining cards in draw pile)
// playCard - correctly assess if player's attempted move is valid, if so, play card on the corresponding pile
// playRound - player plays at least 2 cards (at least 1 card if draw pile is empty), then refills hand if draw pile isn't empty 
// displayTable - shows the four piles and player's hand

// 3. Master Game Function

// */

// // global variables for gameplay

// var drawPile = [];
// var isDrawPileEmpty = false;
// var myHand = [];
// var ascendingPile1 = 1;
// var ascendingPile2 = 1;
// var descendingPile1 = 100;
// var descendingPile2 = 100;
// var table = {};


// function startGame () { // properly resets all of the global variables
//   for (var i = 0; i < 99; i++) {
//    drawPile[i] = i + 1; 
//   }
//   isDrawPileEmpty = false;
//   myHand = [];
//   ascendingPile1 = 1;
//   ascendingPile2 = 1;
//   descendingPile1 = 100;
//   descendingPile2 = 100;
//   resetTable();
// }

// function dealHand() {
//   for (var i = myHand.length; (i < 8 && !isDrawPileEmpty); i++) {
//     var card = drawCard();
//     myHand.push(card);
//     myHand.sort(function(a, b){return a - b;});
//     drawPile[card - 1] = 'played';
//     isDrawPileEmpty = getDrawPileStatus();
//   }
// }

// function drawCard () {
//   var newCard = null;
//   newCard = Math.floor(Math.random() * 99) + 1;
//   while (drawPile[newCard - 1] === 'played') {
//     newCard = Math.floor(Math.random() * 99) + 1;
//   }
//   return newCard;
// }

// function getDrawPileStatus() {
//   var pileStatus = false;
//   for (var i = 0; i < drawPile.length; i++) {
//     if (drawPile[i] !== 'played') {
//       pileStatus = true;
//     }
//   }
//   return !pileStatus;
// }



// function playRound() {
  
//   var cardsPlayedThisRound = 0;
//   var cardsRequiredThisRound = 2;
//   var playerChoice = '';
//   dealHand();
//   if (isDrawPileEmpty) {
//     cardsRequiredThisRound--;
//   }
  
//   do {
//     console.clear();
//     displayTable();
//     setTimeout(function () {}, 5000);

//     var pileChoicePrompt = '';
//     var cardChoicePrompt = '';
//     var pileExplainer = 'Pile 1 is upper left.\nPile 2 is upper right.\nPile 3 is lower left.\nPile 4 is lower right.';
    
//     //Let user know how many cards they need to play.
//     if (cardsRequiredThisRound - cardsPlayedThisRound === 2) {
//       pileExplainer = 'You still need to play at least 2 more cards this round.\n\n' + pileExplainer;
//     } else if (cardsRequiredThisRound - cardsPlayedThisRound === 1) {
//       pileExplainer = 'You still need to play at least 1 more card this round.\n\n' + pileExplainer;
//     } else {
//       pileExplainer = 'You\'ve played the required amount of cards, but you can continue to play more cards this round if you\'d like.\n' + pileExplainer;
//       playerChoice = prompt('If you\'d like to end this round and get more cards, enter \'done\":').toLowerCase();
//     }
    
//     if (playerChoice !== 'done') {
      
//       //get pile choice
//       do {
//         pileChoicePrompt = Number(prompt('What pile (1, 2, 3, or 4) would you like to play on?\n' + pileExplainer));
//       } while (![1,2,3,4].includes(pileChoicePrompt)); 
      
//       //get card choice
//       do {
//         cardChoicePrompt = Number(prompt('What card value from your hand would you like to play?'));
//       } while (!myHand.includes(cardChoicePrompt));
      
//       //play card using prompt choices as determined above, and increment cardsPlayedThisRound if the play was a valid one
//       if (playCard(cardChoicePrompt,pileChoicePrompt)) {
//         cardsPlayedThisRound++;
//       }
//     }
//   } while (cardsPlayedThisRound < cardsRequiredThisRound || playerChoice !== 'done');
  
//   console.clear();
//   displayTable();
// }

// function playCard(cardValue, pileChoice) {
//   var cardIndex = myHand.indexOf(cardValue);
//   if (pileChoice === 1) {
//     if (myHand[cardIndex] < descendingPile1) {
//       descendingPile1 = myHand[cardIndex];
//       myHand.splice(cardIndex,1);
//     } else if (myHand[cardIndex] === descendingPile1 + 10) {
//       descendingPile1 = myHand[cardIndex] + 10;
//       myHand.splice(cardIndex,1);
//     } else {
//       console.log('This card can\'t be played on this pile...it\'s too high!');
//       return false;
//     }
//   }
//   if (pileChoice === 2) {
//     if (myHand[cardIndex] > ascendingPile1) {
//       ascendingPile1 = myHand[cardIndex];
//       myHand.splice(cardIndex,1);
//     } else if (myHand[cardIndex] === ascendingPile1 - 10) {
//       ascendingPile1 = myHand[cardIndex] - 10;
//       myHand.splice(cardIndex,1);
//     } else {
//       console.log('This card can\'t be played on this pile...it\'s too low!');
//       return false;
//     }
//   }
//   if (pileChoice === 3) {
//     if (myHand[cardIndex] < descendingPile2) {
//       descendingPile2 = myHand[cardIndex];
//       myHand.splice(cardIndex,1);
//     } else if (myHand[cardIndex] === descendingPile2 + 10) {
//       descendingPile2 = myHand[cardIndex] + 10;
//       myHand.splice(cardIndex,1);
//     } else {
//       console.log('This card can\'t be played on this pile...it\'s too high!');
//       return false;
//     }
//   }
//   if (pileChoice === 4) {
//     if (myHand[cardIndex] > ascendingPile2) {
//       ascendingPile2 = myHand[cardIndex];
//       myHand.splice(cardIndex,1);
//     } else if (myHand[cardIndex] === ascendingPile2 - 10) {
//       ascendingPile2 = myHand[cardIndex] - 10;
//       myHand.splice(cardIndex,1);
//     } else {
//       console.log('This card can\'t be played on this pile...it\'s too low!');
//       return false;
//     }
//   }
//   return true;
// }

// function resetTable() {
//   table.a1 = displayPile(ascendingPile1);
//   table.a2 = displayPile(ascendingPile2); 
//   table.d1 = displayPile(descendingPile1); 
//   table.d2 = displayPile(descendingPile2);
//   table.view = [];
//   table.view.push(' ------             ------');
//   table.view.push('|      | 100       |      |');
//   table.view.push('| ' + table.d1 + '  |  \u2193     \u2191  | ' + table.a1 + '  |');
//   table.view.push('|      |        1  |      |');
//   table.view.push(' ------             ------');
//   table.view.push('');
//   table.view.push(' ------             ------');
//   table.view.push('|      | 100       |      |');
//   table.view.push('| ' + table.d1 + '  |  \u2193     \u2191  | ' + table.a1 + '  |');
//   table.view.push('|      |        1  |      |');
//   table.view.push(' ------             ------');
//   table.view.push('');
//   table.view.push('Your Hand: ' + myHand + '\n');
// }

// function displayPile (num) {
//   if (num === 100) {
//     return '100';
//   } else if (num < 100 && num > 9) {
//     return ' ' + num.toString();
//   } else if (num < 10) {
//     return '  ' + num.toString(); 
//   }
// }

// function displayTable() {
//   table.a1 = displayPile(ascendingPile1);
//   table.a2 = displayPile(ascendingPile2); 
//   table.d1 = displayPile(descendingPile1); 
//   table.d2 = displayPile(descendingPile2);
//   table.view[2] = '| ' + table.d1 + '  |  \u2193     \u2191  | ' + table.a1 + '  |';
//   table.view[8] = '| ' + table.d2 + '  |  \u2193     \u2191  | ' + table.a2 + '  |';
//   table.view[12] = 'Your Hand: [' + myHand.join(', ')  + ']\n';
//   console.log('\n\n\n\n\n\n\n' + table.view.join('\n'));
// }

// function assertArraysEqual (actual, expected, testName) {
//   var isEqual = true;
//   if (actual.length !== expected.length) {
//     isEqual = false;
//   }
//   for (var i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       isEqual = false;
//     }
//   }
//   if (isEqual) {
//     console.log('Passed! [' + testName + ']');
//   } else {
//     console.log('FAILED [' + testName + ']: Expected ' + expected + ', but got ' + actual + ' instead');
//   }
// }

// function assertEqual (actual, expected, testName) {
//   var isEqual = true;
//   if (actual !== expected) {
//     isEqual = false;
//   }
//   if (isEqual) {
//     console.log('Passed! [' + testName + ']');
//   } else {
//     console.log('FAILED [' + testName + ']: Expected ' + expected + ', but got ' + actual + ' instead');
//   }
// }

// // startGame();
// // assertArraysEqual(myHand,[],'should correctly initialize player\'s hand');
// // console.log(drawPile);

// startGame();
// dealHand();

// // ascendingPile1 = 66;
// // ascendingPile2 = 9;
// // descendingPile1 = 48;
// // descendingPile2 = 20;


// displayTable();

var a = asdfj;


