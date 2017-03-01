(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.header-navigator").controller("HeaderNavigatorDirectiveController", HeaderNavigatorDirectiveController);

	HeaderNavigatorDirectiveController.$inject = ["HeaderNavigatorModel"];

	function HeaderNavigatorDirectiveController(HeaderNavigatorModel){
		
		var vc = this;
		vc.vm = HeaderNavigatorModel;
	
		vc.closeHeaderNavigation = function(){
			vc.vm.isOpen = false;
		}

	}

})();