angular.module('video-player')

.component('app', {
  // TODO
  bindings: {
    // all params passed into new instances of 'app'
    // <
    // @
  },
  controller: function (youTube) {
    
    this.videoCount = 5;
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    youTube.search(this, '', this.videoCount, true);
    this.currentSearchText = '';
    
    this.selectVideo = (index) => {    
      this.currentVideo = this.videos[index];
    };
    
    
    this.searchResults = function (text) {
      this.videoCount = 5;
      this.currentSearchText = text;
      youTube.search(this, text, this.videoCount, true);
      
    }.bind(this);
    
    this.keyEnter = function (event, text) {
    
      this.currentSearchText = text;
      this.videoCount = 5;
      if (event.key === 'Enter') {
        youTube.search(this, text, this.videoCount, true);
      }
      
    }.bind(this);
    
    this.userTypesSomething = function (event, text) {
    
      this.videoCount = 5;
      this.currentSearchText = text;
      youTube.search(this, text, this.videoCount, true);     
         
    }.bind(this);
    
    this.loadMoreVids = function (event) {
      this.videoCount += 5;
      youTube.search(this, this.currentSearchText, this.videoCount, false);     
         
    }.bind(this);

    
  },
  templateUrl: 'src/templates/app.html',
});
