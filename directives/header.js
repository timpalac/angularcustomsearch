(function(){
	angular.module("searchApp")
	.directive("sharedHeader", function() {
		return {
		    restrict: 'E',
		    scope: {
		    	banner: '@'
		    },
		    templateUrl: 'directives/header.html'
		  };
	});
})();