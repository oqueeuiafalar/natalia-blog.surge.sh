(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.widgets.links-institucionais").directive("widgetLinksInstitucionais", WidgetLinksInstitucionaisDirective);

	function WidgetLinksInstitucionaisDirective(){
		var directive = {
			templateUrl: "/src/javascript/components/widgets/links-institucionais/templates/links-institucionais.template.html",
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