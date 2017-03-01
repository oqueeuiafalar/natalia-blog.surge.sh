(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.header-navigator").factory("HeaderNavigatorModel", HeaderNavigatorModel);

	function HeaderNavigatorModel(){
		var model = {
			isOpen: true
		};
		return model;

	}

})();