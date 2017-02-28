(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.widgets.related-posts").directive("widgetRelatedPosts", WidgetRelatedPostsDirective);

	function WidgetRelatedPostsDirective(){
		var directive = {
			templateUrl: "/src/javascript/components/widgets/related-posts/templates/related-posts.template.html",
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