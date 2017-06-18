(function () {
   function ModalController($stateParams, $state, $modal) {        
       
        var modalInstance = $modal.open({
            templateUrl: 'app/views/photoDetails.html',
            controller: 'PhotoDetailsController',
            resolve: {
                id: function () {
                   return $stateParams.id;
            }}});

        modalInstance.result.then(function () {
                $state.go('list');
            }, function () {
                $state.go('list');
         });
    };

    photoAlbumApp.controller('PhotoAlbumModalDetailsController', ['$stateParams', '$state','$modal', ModalController]);
})();