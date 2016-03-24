(function(){
	angular.module("searchApp")
	.controller("resultsController",['$scope', '$routeParams', '$http', '$window', 'customSearch', function($scope, $routeParams, $http, $window, customSearch){
		$scope.searchTerm = $routeParams.term;
		$scope.currentPage = 1;
		$scope.searchResults = [];

		$scope.getResults = function(){
			customSearch.searchData($scope.searchTerm, $scope.currentPage).then(function(result){
				$scope.searchResults = result.data.items;
				$scope.pagingData = result.data.queries;
			});
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

		$scope.gotoTop = function() {
	      $window.scrollTo(0,0);
	    };
	}]);
})();