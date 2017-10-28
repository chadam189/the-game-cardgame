angular.module('video-player')

.component('search', {
  
  bindings: {
    newSearch: '<',
    enter: '<',
    userTypesSomething: '<'
    
  },
  // TODO
  templateUrl: 'src/templates/search.html'
});
