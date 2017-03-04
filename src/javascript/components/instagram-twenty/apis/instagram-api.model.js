(function(){
	
	"use strict";

	angular.module("instagram-twenty").factory("InstagramApiModel", InstagramApiModel);

	function InstagramApiModel(AjaxModel){
		var model = {
			getPhotos: getPhotos
		};

		function getPhotos(){
			return AjaxModel.get("http://www.instagram.com/sjnat/media/");
		}

		return model;
	}

})();