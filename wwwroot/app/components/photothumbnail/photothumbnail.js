(function () {
   function PhotoThumbnailOptions() {   		
        return {
        	bindings: {
        		src: '=',
                desc: '=',
                photoId: '='
        	},            
            templateUrl: 'app/components/photothumbnail/photothumbnail.html'
        }
    }

    photoAlbumApp.component("photoThumbnail", PhotoThumbnailOptions());
    
})();