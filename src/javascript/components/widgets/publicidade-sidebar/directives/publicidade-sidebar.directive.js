(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.widgets.publicidade-sidebar").directive("widgetPublicidadeSidebar", WidgetPublicidadeSidebarDirective);

	function WidgetPublicidadeSidebarDirective(){
		var directive = {
			templateUrl: "/src/javascript/components/widgets/publicidade-sidebar/templates/publicidade-sidebar.template.html",
			restrict: "AE",
			controller: function(PublicidadeModel){
				var vc = this;
				vc.vm = PublicidadeModel;
			},
			scope: {},
			controllerAs: "vc",
			bindToController: true,
			replace: true			
		};
		return directive;
	}

})();