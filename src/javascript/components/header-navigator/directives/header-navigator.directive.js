(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.header-navigator").directive("headerNavigator", HeaderNavigatorDirective);

	function HeaderNavigatorDirective(){
		var directive = {
			restrict: "AE",
			replace: true,
			scope: {},
			templateUrl: "/src/javascript/components/header-navigator/templates/header-navigator.template.html",
			controllerAs: "vc",
			controller: "HeaderNavigatorDirectiveController",
			bindToController: true
		};
		return directive;
	}

})();