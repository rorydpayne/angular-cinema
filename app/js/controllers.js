'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('FilmListCtrl', ['$scope', 'Showing',
  function($scope, Showing) {
    $scope.showings = Showing.query();
  }]);

myAppControllers.controller('FilmDetailCtrl', ['$scope', '$routeParams', 'Showing',
  function($scope, $routeParams, Showing) {
    $scope.showing = Showing.get({showingId: $routeParams.showingId});

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);