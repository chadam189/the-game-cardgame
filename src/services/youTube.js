angular.module('the-game')
.service('youTube', function($http) {
  this.search = function (context, query, num = 5, bool) {
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        key: 'AIzaSyAxqRfmlsNEgTTfymTt8pgi90ZjghZQ4sI',
        chart: 'mostPopular',
        q: query,
        maxResults: num,
        part: 'snippet',
        type: 'video',
        embeddable: 'true'
      },
    }).then(function successCallback(response) {
      // console.log(response);
      this.videos = response.data.items;
      if (bool) {
        this.currentVideo = this.videos[0];
      }
    }.bind(context), function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
  };
  
});
