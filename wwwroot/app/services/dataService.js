(function () {
    function DataService($http) {

	    this.baseUrl = 'https://jsonplaceholder.typicode.com/photos';

	    this.GetData = function () {
	        return $http.get(this.baseUrl);
	    };
	}

	photoAlbumApp.service('dataService', ['$http', DataService] ); 
})();