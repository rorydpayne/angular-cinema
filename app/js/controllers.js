'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

 myAppControllers.config(function($httpProvider) {
   $httpProvider.defaults.headers.useXDomain = true;
   delete $httpProvider.defaults.headers.common['X-Requested-With'];
 });

myAppControllers.controller('FilmListCtrl', ['$scope','$http',
  function($scope, $http) {
    $http.get('http://localhost:9000/showings')
      .then(function(response) {
        $scope.showings = response.data;
      })
  }]);

myAppControllers.controller('FilmDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('http://localhost:9000/showings/film',{params: {showingId: $routeParams.showingId}})
      .then(function(response) {
        $scope.showing = response.data;
      })

  }]);

