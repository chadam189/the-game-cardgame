angular.module('the-game', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
});
