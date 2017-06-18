(function () {
   function PhotoAlbumController($scope, $http, dataService) {

        $scope.loadData = function () {
            var data = dataService.GetData()
                .then(function (response) {
                    $scope.photoAlbumData = response.data;
                }, function (response) {
                    alert('error, status: ' + response.status + ' statusText - ' + response.statusText);
                });;
        };    

        $scope.init = function () {
           $scope.loadData();
        };    

        $scope.init();
    };

    photoAlbumApp.controller('PhotoAlbumController', ['$scope', '$http', 'dataService', PhotoAlbumController]);
})();