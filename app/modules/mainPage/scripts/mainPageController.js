angular.module('main', [])
.controller('mainPageController', function ($scope, $window) {

	if(window.innerWidth > 700){$scope.navClick = !$scope.navClick;}


	$scope.navFunction = function() {
		if(!$scope.navClick) {
			$scope.navClick = !$scope.navClick;
		
				$scope.currentWidth = $(window).width() - 50;
		
				var main = document.getElementById("mainWrapper");
		
				$(main).css("left", $scope.currentWidth);
		}
		else {
			$scope.navClick = !$scope.navClick;
			var main = document.getElementById("mainWrapper");
			
			$(main).css("left", "0");
		}

	};

});