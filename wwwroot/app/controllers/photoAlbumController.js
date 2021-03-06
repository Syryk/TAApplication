(function () {
   function PhotoAlbumController($scope, $http, dataService) {

        $scope.dataToRender = [];
        $scope.counter = 0;
        $scope.canLoad = false;
        $scope.loadMore = function(){
            if($scope.canLoad){
                for (var i = $scope.counter; i < $scope.counter+50; i++) {
                    $scope.dataToRender.push($scope.photoAlbumData[i]);
                }
                $scope.counter += 50;
            }
        };

        $scope.loadData = function () {
            var data = dataService.GetData()
                .then(function (response) {
                    $scope.photoAlbumData = response.data;
                    $scope.canLoad = true;
                    $scope.loadMore();
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