angular.module('recipeApp', [])
.controller('recipeAppController', function ($scope, $http) {

	$scope.getRecipes = function(filterString) {

		var checkForAnyfilters = filterString;

		$scope.newRecipe = {};

		if(checkForAnyfilters) {
			var url = '/api/recipes' + filterString;
		    $http({
		    	method: 'GET',
	 	    	headers: {
	 	    		"Content-type": "application/json"
	 	    	},
		    	url: url
			})
			.then(function successCallBack(reponse) {
		        $scope.recipes = reponse.data;
			});
		}
		else {
			var url = '/api/recipes';
		    $http({
		    	method: 'GET',
	 	    	headers: {
	 	    		"Content-type": "application/json"
	 	    	},
		    	url: url
			})
			.then(function successCallBack(reponse) {
		        $scope.recipes = reponse.data;
			});			
		}
	};

	$scope.getFilteredRecipes = function(course, cuisine) {
		var filterString = '?course=' + course + '&cuisine=' + cuisine;

		$scope.getRecipes(filterString);
	};

	$scope.navFunction = function() {
		$scope.navClick = !$scope.navClick;
	};

	$scope.addRecipe = function() {
		$scope.view = "makingRecipe";
		$scope.newRecipe = {};
	};

	$scope.cancel = function() {
		$scope.view = null;
	};

	$scope.saveRecipe = function(id) {

    	var recipe =     
    	{
	      "image": $scope.newRecipe.image,
	      "title": $scope.newRecipe.title,
	      "ingredients": ($scope.newRecipe.ingredients).split("\n"),
	      "totalTime": $scope.newRecipe.totalTime,
	      "directions": ($scope.newRecipe.directions).split("\n"),
	      "servings": $scope.newRecipe.servings,
	      "course": $scope.newRecipe.course,
	      "cuisine": $scope.newRecipe.cuisine
    	};

    	if(id) {
	    	var url = '/api/recipes/' + id ;
	 	    $http({
	 	    	method: 'PUT',
	 	    	url: url,
	 	    	headers: {
	 	    		"Content-type": "application/json"
	 	    	},
	 	    	data: recipe
	    	})
	    	.then(function successCallBack(reponse) {
	    		$scope.view = null;
	    	});	
    	}
    	else {
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

	};

	$scope.openRecipe = function(id, destination) {
    	var url = '/api/recipes/' + id ;
 	    $http({
 	    	method: 'GET',
 	    	url: url
    	})
    	.then(function successCallBack(reponse) {
    		$scope.view = destination;
    		$scope.newRecipe = reponse.data;

    		if(destination === 'makingRecipe') {
	    		var newString = "";
	    		for(var x = 0; x < $scope.newRecipe.ingredients.length; x++) {
	    			newString = newString + $scope.newRecipe.ingredients[x] + "\n";
	    		}
	    		$scope.newRecipe.ingredients = newString;    	

	    		newString = "";
	    		for(var x = 0; x < $scope.newRecipe.directions.length; x++) {
	    			newString = newString + $scope.newRecipe.directions[x] + "\n";
	    		}
	    		$scope.newRecipe.directions = newString;  
    		}
    	});		
	};

	$scope.deleteRecipe	= function(id) {
    	var url = '/api/recipes/' + id ;
 	    $http({
 	    	method: 'DELETE',
 	    	url: url
    	})
    	.then(function successCallBack(reponse) {
    		$scope.view = null;
    	});			
	};

});