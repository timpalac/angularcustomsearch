(function(){
	angular.module("searchApp")
	.controller("resultsController",['$scope', '$http', '$window', '$routeParams', 'customSearch', function($scope, $http, $window, $routeParams, customSearch){
		$scope.searchResults = [];
		$scope.searchTerm = $routeParams.term;
		$scope.currentPage = 1;

		$scope.getResults = function(){
			/*$http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyBH3RytzErq4C_muuOF7ADiH6c1EKyBDn4&cx=017070547027648464533:g2zvecu0kzm&q=" + $scope.searchTerm + "&start=" + $scope.currentPage).success(function(results) {
				$scope.searchResults = results.items;
				$scope.pagingData = results.queries;
			});*/

			customSearch.searchData($scope.searchTerm, $scope.currentPage).then(function(result){
				console.log(result);
				$scope.searchResults = result.data.items;
				$scope.pagingData = result.data.queries;
			});
		};

		$scope.gotoTop = function() {
	      $window.scrollTo(0,0);
	    };

		$scope.getResults();

		$scope.nextTen = function(){
			$scope.currentPage = $scope.currentPage + 10;
			$scope.getResults();
			$scope.gotoTop();
		}

		$scope.previousTen = function(){
			$scope.currentPage = $scope.currentPage - 10;
			$scope.getResults();
			$scope.gotoTop();
		}
	}]);
})();