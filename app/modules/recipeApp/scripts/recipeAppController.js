angular.module('recipeApp', [])
.controller('recipeAppController', function ($scope, $http) {

	var url = '/api/recipes';
	    $http({
	    	method: 'GET',
	    	url: url
	})
	.then(function successCallBack(reponse) {
        $scope.recipes = reponse.data;
        console.log(reponse);
	});

	$scope.navFunction = function() {
		$scope.navClick = !$scope.navClick;
	}

 
 	$scope.save = function() {
    	var recipe =     
    	{
	      "image": "testImage",
	      "title": "Chicken Alfrado",
	      "ingredients": [],
	      "time": "1 hour",
	      "favorites": ["Andrea", "Adam", "Ashley"],
	      "meal": "Dinner",
	      "mainIngredient": "Chicken",
	      "notes": "It is very good"
    	};


    	var url = '/api/recipes';
 	    $http({
 	    	method: 'POST',
 	    	url: url,
 	    	data : recipe
    	})
    	.then(function successCallBack(reponse) {
            $scope.recipes = reponse;
            console.log(reponse);
    	});
    };
});