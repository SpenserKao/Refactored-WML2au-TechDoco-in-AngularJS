var wml2auApp = angular.module('wml2auApp', []);
wml2auApp.controller('browseCategory', ['$scope', '$http', 'showHTMLcontent', function($scope, $http, showHTMLcontent) {
	$http.get('wml2auTechDoc.json').success(function(data) {
		$scope.cats = data.wml2auTechDocumentation;
		$scope.myCat = $scope.cats[0];

		$scope.subcats = $scope.myCat.subcat;
		$scope.mySubCat = $scope.subcats[0];	

		$scope.sections = $scope.mySubCat.section;
		$scope.mySect = $scope.sections[0];

		$scope.content = $scope.mySect.content;			
		$scope.selectedSectIndex= 0;
	});

	$scope.changingCategorySelection = function(selected) {
		$scope.myCat = selected;
		$scope.subcats = $scope.myCat.subcat;
		$scope.mySubCat = $scope.subcats[0];	

		$scope.sections = $scope.mySubCat.section;
		$scope.mySect = $scope.sections[0];
		$scope.content - $scope.mySect.content;		
		$scope.selectedSectIndex= 0;		
	};

	$scope.changingSubCategorySelection = function(selected) {
		$scope.mySubSect = selected;		

		$scope.sections = $scope.mySubCat.section;
		$scope.mySect = $scope.sections[0];	
		$scope.content = $scope.mySect.content;		
		$scope.selectedSectIndex= 0;		
	};	

	$scope.gotoAnchor = function(index) {
		$scope.mySect = $scope.sections[index];
        if ($scope.selectedItem == index) 
            $scope.selectedItem = -1;
 		else 
			$scope.selectedSectIndex = index;
	};	
}]);

/**
 * Following configuration is to force  to remove unwanted "#/index.html" suffix from URL when refreshing
 * ref: http://stackoverflow.com/questions/14771091/removing-the-fragment-identifier-from-angularjs-urls-symbol
 *		https://docs.angularjs.org/api/ng/provider/$locationProvider
 */
wml2auApp.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}]);

wml2auApp.factory('showHTMLcontent', function() {
	return {
		htmlOut: function(url) {
			return url;
		}
	}
});

/*
wml2auApp.service('showHTMLcontent', function() {
	this.html = function(url) {
		alert("service showHTMLcontent url=" + url);
	}
});
*/
/*
wml2auApp.service('showHTMLcontent', '$http', function(url, $http) {
	$http.get(url).success(function(data) {
		this.htmlContent = data;
		alert(this.htmlContent);
	});	
});
*/