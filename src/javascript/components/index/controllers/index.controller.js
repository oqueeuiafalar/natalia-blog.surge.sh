(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar").controller("indexController", indexController);

	indexController.$inject = ["HeaderNavigatorModel", "$scope"];
	
	function indexController(HeaderNavigatorModel, $scope){
		$scope.headerNavigatorModel = HeaderNavigatorModel;	
	}

})();