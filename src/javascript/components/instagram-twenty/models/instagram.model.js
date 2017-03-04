(function(){
	
	"use strict";

	angular.module("instagram-twenty").factory("InstagramModel", InstagramModel);

	function InstagramModel(InstagramApiModel){
		var model = {
			thumbnails: null,
			init: init
		};

		function init(){
			var instagramPromise = InstagramApiModel.getPhotos();
			instagramPromise.then(function(result){
				var thumbnails = [];

				var photos = result.data.items;				

				for(var i=0; i < photos.length;i++){
					var thumbnail = {
						url: photos[i].images.thumbnail.url,
						link: photos[i].link,
						imageAlt: photos[i].caption.text
					};
					thumbnails.push(thumbnail);
				}

				model.thumbnails = thumbnails;
				console.log(model);

			})
		}


		return model;
	}

})();