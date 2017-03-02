(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.header-navigator").factory("HeaderNavigatorModel", HeaderNavigatorModel);

	function HeaderNavigatorModel(){
		var model = {
			isOpen: true,
			toggleHeader: toggleHeader,
			openHeader: openHeader,
			closeHeader: closeHeader
		};

		function toggleHeader(){
			model.isOpen = !model.isOpen;
		}

		function openHeader(){
			model.isOpen = true;
		}

		function closeHeader(){
			model.isOpen = false;
		}

		return model;

	}

})();