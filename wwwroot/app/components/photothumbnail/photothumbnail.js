(function () {
   function PhotoThumbnailOptions() {   		
        return {
        	bindings: {
        		src: '=',
                title: '='
        	},            
            templateUrl: 'app/components/photothumbnail/photothumbnail.html'
        }
    }

    photoAlbumApp.component("photoThumbnail", PhotoThumbnailOptions());
    
})();