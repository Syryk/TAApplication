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

      onEnter: ['$stateParams', '$state', '$modal',
              function($stateParams, $state, $modal) {

                $modal.open({
                  templateUrl: 'app/views/photoDetails.html',
                  controller: 'PhotoDetailsController'
                })
                .result.then(function() {
                  $state.transitionTo('list');
                }, function() {
                  $state.transitionTo('list');
                });

              }
            ],
      onClode: ['$modal',
              function($modal) {

                $modal.clode();
              }
            ],
    });
  }  
  
  photoAlbumApp.config(['$stateProvider', '$urlRouterProvider', stateConfig]);
})();