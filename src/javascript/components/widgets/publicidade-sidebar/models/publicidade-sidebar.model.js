(function(){
	
	"use strict";

	angular.module("oquequeeuiafalar.components.widgets.publicidade-sidebar").provider("PublicidadeModel", PublicidadeModelProvider);

	function PublicidadeModelProvider(){
		
		var configure = {
			setItems: setItems,
			items: []			
		};

		function setItems(items){
			configure.items = items;			
		}

		var provider = {
			$get: PublicidadeModel,
			configure: configure
		};
		return provider;

		function PublicidadeModel(){
			var model = {
				items: configure.items
			};
			return model;
		}

	}

})();