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
    .when('/modules/resume/views/resume.html', {
     templateUrl: 'modules/resume/views/resume.html',
     controler: 'mainController'
   })
    .when('/modules/mywork/views/mywork.html', {
     templateUrl: 'modules/mywork/views/mywork.html',
     controler: 'mainController'
   });
  });
})();