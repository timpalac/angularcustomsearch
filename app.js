(function(){
	angular.module("searchApp", ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/search',{
	    templateUrl: "views/searchView.html",
	  	controller: "searchController"
	  }).when('/search/:term',{
	  	templateUrl: "views/resultsView.html",
	  	controller: "resultsController"
	  }).otherwise({
	  	redirectTo: "/search",
	  });
	 }]);
})();