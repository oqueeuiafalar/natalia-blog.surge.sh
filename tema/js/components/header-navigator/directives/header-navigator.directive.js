(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.header-navigator").directive("headerNavigator", HeaderNavigatorDirective);

	function HeaderNavigatorDirective(){
		var directive = {
			restrict: "AE",
			replace: true,
			templateUrl: "/tema/js/components/header-navigator/templates/header-navigator.template.html",
			controllerAs: "vc",
			controller: function(){
				var vc = this;
			},
			bindToController: true
		};
		return directive;
	}

})();