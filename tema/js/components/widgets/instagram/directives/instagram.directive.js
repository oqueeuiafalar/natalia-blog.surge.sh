(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.widgets.instagram").directive("widgetInstagram", WidgetInstagramDirective);

	function WidgetInstagramDirective(){
		var directive = {
			templateUrl: "/tema/js/components/widgets/instagram/templates/instagram.template.html",
			restrict: "AE",
			controller: function(){
				var vc = this;
			},
			controllerAs: "vc",
			bindToController: true,
			replace: true			
		};
		return directive;
	}

})();