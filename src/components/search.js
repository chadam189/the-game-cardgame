angular.module('video-player')

.component('search', {
  
  bindings: {
    newSearch: '<',
    enter: '<',
    deck: '<',
    userTypesSomething: '<'
    
  },
  // TODO
  templateUrl: 'src/templates/search.html'
});
