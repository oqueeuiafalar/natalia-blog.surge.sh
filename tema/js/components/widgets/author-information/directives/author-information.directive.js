(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.widgets.author-information").directive("widgetAuthorInformation", WidgetAuthorInformationDirective);

	function WidgetAuthorInformationDirective(){
		var directive = {
			templateUrl: "/tema/js/components/widgets/author-information/templates/author-information.template.html",
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