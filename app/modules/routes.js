(function () {

  'use strict';

  angular
  .module('myRoutes', [
    'ngRoute'
    ])

  .config(function ($routeProvider) {    
    $routeProvider
    .when('/', {
     templateUrl: 'modules/mainPage/views/mainPage.html',
     controler: 'mainController'
    })
    .when('/resume', {
     templateUrl: 'modules/resume/views/resume.html',
     controler: 'mainController'
   })
    .when('/myWork', {
     templateUrl: 'modules/mywork/views/mywork.html',
     controler: 'mainController'
   })
    .when('/recipeApp', {
     templateUrl: '/modules/recipeApp/views/recipeApp.html',
     controler: 'recipeAppController'
   });    
  });
})();