angular.module('the-game')
.component('videoList', {
  bindings: {
    videos: '<',
    selectVideo: '<',
    loadMoreVids: '<'
  },
  // TODO
  controller: function() {
    // console.log(this.videos);
  },
  
  templateUrl: 'src/templates/videoList.html'
});
