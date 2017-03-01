(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar").controller("indexController", IndexController);

	IndexController.$inject = ["HeaderNavigatorModel"];
	
	function IndexController(HeaderNavigatorModel){
		var vc = this;
		vc.headerNavigatorModel = HeaderNavigatorModel;
		console.log(vc.headerNavigatorModel);
	}

})();