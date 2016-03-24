angular.module("searchApp")
.factory('customSearch', function($http) { 
    var searchData = function(searchTerm, currentPage) {
	    return $http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyBH3RytzErq4C_muuOF7ADiH6c1EKyBDn4&cx=017070547027648464533:g2zvecu0kzm&q=" + searchTerm + "&start=" + currentPage).success(function(result){
	    	return result;
	    });
	};

    return {
    	searchData: searchData
    }
});