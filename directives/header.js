(function(){
	angular.module("searchApp")
	.directive("sharedHeader", function() {
		return {
		    restrict: 'E',
		    scope: {
		    	banner: '@',
		    	banner2: '@'
		    },
		    templateUrl: 'directives/header.html'
		  };
	});
})();