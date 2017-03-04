(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.widgets.instagram").directive("widgetInstagram", WidgetInstagramDirective);

	function WidgetInstagramDirective(){
		var directive = {
			templateUrl: "/src/javascript/components/widgets/instagram/templates/instagram.template.html",
			restrict: "AE",
			controller: function(InstagramModel){
				var vc = this;
				vc.vm = InstagramModel;
				vc.vm.init();
			},
			scope:  {},
			controllerAs: "vc",
			bindToController: true,
			replace: true			
		};
		return directive;
	}

})();