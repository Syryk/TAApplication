(function () {
   function DetailsController($stateParams, $scope, $modal, dataService) {        
       

   		$scope.loadData = function () {
            var data = dataService.GetData()
                .then(function (response) {
                    $scope.allDetails = response.data;

        			$scope.loadDetails();
                }, function (response) {
                    alert('error, status: ' + response.status + ' statusText - ' + response.statusText);
                });;
        };

        $scope.init = function () {
        	debugger;
            var id = $stateParams.id;
            $scope.id = id;
        };

        $scope.loadDetails = function(){
        	$scope.details = $scope.allDetails.filter(function(a){
        			return a.id == $scope.id;
				})[0];
        }; 

        $scope.init();
        $scope.loadData();
    };

    photoAlbumApp.controller('PhotoDetailsController', ['$stateParams', '$scope','$modal', 'dataService', DetailsController]);
})();