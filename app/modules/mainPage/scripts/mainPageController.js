angular.module('main', [])
.controller('mainPageController', function ($scope, $window) {

	if(window.innerWidth > 700){$scope.navClick = !$scope.navClick;}


	$scope.navFunction = function() {
		$scope.navClick = !$scope.navClick;
	};

});