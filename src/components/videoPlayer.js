angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    currentVideo: '<'
  },
  
  controller: function () {
    
    this.buildURL = () => {
      // var tag = this.currentVideo.id.videoId;
      // var temp = 'https://www.youtube.com/embed/' + tag;
      // console.log('url ', temp);
      // // return $sce.trustAsResourceURL(temp);
      return 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId;
    };
    
    // this.buildURL.bind(this);
  
  
    // "{{apiUrl+document.directory + '/' + document.name + '.'+ document.type   | trustAsResourceUrl}}"

  },
  
  templateUrl: 'src/templates/videoPlayer.html',

});

  

  // templateUrl: 'src/templates/videoPlayer.html',
  // 
  
  //   template: (`
  // <div class="video-player">
  //   <div class="embed-responsive embed-responsive-16by9">
  //     <iframe class="embed-responsive-item" src={{$ctrl.currentVideo.id.VideoId}} allowFullScreen></iframe>
  //   </div>
  //   <div class="video-player-details">
  //     <h3>{{}}</h3>
  //     <div>Video Description</div>
  //   </div>
  // </div>
  // `)
