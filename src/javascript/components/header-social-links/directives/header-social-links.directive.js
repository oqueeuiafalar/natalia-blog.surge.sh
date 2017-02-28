(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.header-social-links").directive("headerSocialLinks", HeaderSocialLinks);

	function HeaderSocialLinks(){
		var directive = {
			restrict: "AE",
			replace: true,
			templateUrl: "/src/javascript/components/header-social-links/templates/header-social-links.template.html",
			controllerAs: "vc",
			controller: function(){
				var vc = this;
			},
			bindToController: true
		};
		return directive;
	}

})();