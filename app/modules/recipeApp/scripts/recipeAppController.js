angular.module('recipeApp', [])
.controller('recipeAppController', function ($scope, $http) {

	$scope.getRecipes = function() {

		$scope.newRecipe = {};
		var url = '/api/recipes';
		    $http({
		    	method: 'GET',
		    	url: url
		})
		.then(function successCallBack(reponse) {
	        $scope.recipes = reponse.data;
		});
	}

	$scope.navFunction = function() {
		$scope.navClick = !$scope.navClick;
	}

 	$scope.save = function() {

    };
	$scope.addRecipe = function() {
		$scope.view = "makingRecipe";
	}
	$scope.cancel = function() {
		$scope.view = null;
	}
	$scope.saveNewRecipe = function() {

		var ingredients = ($scope.newRecipe.ingredients).split("\n");

    	var recipe =     
    	{
	      "image": $scope.newRecipe.image,
	      "title": $scope.newRecipe.title,
	      "ingredients": ingredients,
	      "totalTime": $scope.newRecipe.totalTime,
	      "directions": $scope.newRecipe.directions,
	      "servings": $scope.newRecipe.servings
    	};

    	var url = '/api/recipes';
 	    $http({
 	    	method: 'POST',
 	    	url: url,
 	    	data : recipe
    	})
    	.then(function successCallBack(reponse) {
    		$scope.view = null;
            $scope.recipes = reponse;
    	});		
	}
	$scope.openRecipe = function(id, destination) {
    	var url = '/api/recipes/' + id ;
 	    $http({
 	    	method: 'GET',
 	    	url: url
    	})
    	.then(function successCallBack(reponse) {
    		$scope.view = destination;
            $scope.newRecipe = reponse.data;
    	});		
	};
	$scope.deleteRecipe	= function(id){
    	var url = '/api/recipes/' + id ;
 	    $http({
 	    	method: 'DELETE',
 	    	url: url
    	})
    	.then(function successCallBack(reponse) {
    		$scope.view = null;
    	});			
	}
});