(function(){
	angular.module("searchApp")
	.directive("searchField", ['$location', '$routeParams', function($location, $routeParams) {
		return {
		    restrict: 'E',
		    templateUrl: 'directives/searchField.html',
		    link: function (scope, attrs) {
		    	scope.searchPlaceholder = "Please enter a search term";

		        if (!$routeParams.term) {
		    		scope.searchField = null;
			    } else {
			    	scope.searchField = $routeParams.term;
			    }

				scope.performSearch = function(){
					$location.path("/search/" + scope.searchField);
				};

				//console.log(attrs);
				//attrs.find("fieldset input[type='text']").css('background','black');
				/*attrs.mousedown(function(){
					alert('hi mom!');
				});*/
		    }
		  };
	}]);
})();