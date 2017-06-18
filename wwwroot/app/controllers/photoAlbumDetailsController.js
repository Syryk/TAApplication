(function () {
   function DetailsController($stateParams, $scope) {
           
        $scope.init = function () {
        	debugger;
            var id = $stateParams.id;
            $scope.details = id;
        };    

        $scope.init();
    };

    photoAlbumApp.controller('PhotoDetailsController', ['$stateParams', '$scope', DetailsController]);
})();