(function(){
  
  function stateConfig($stateProvider, $urlRouterProvider){
  	$urlRouterProvider.otherwise('/');

  	$stateProvider.state('list', {
            url: '/',
            templateUrl: 'app/views/photoList.html'
          });

    $stateProvider.state('details', {
      url: '/details/:id',
      params: {
        id: '0'
      },
      controller: 'PhotoAlbumModalDetailsController'
    });
  }  
  
  photoAlbumApp.config(['$stateProvider', '$urlRouterProvider', stateConfig]);
})();