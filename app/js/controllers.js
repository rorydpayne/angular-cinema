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
        $scope.selectedFilm = $scope.showings[0];
        $scope.fetchSelectedFilmData = function() {
          $http.get('http://localhost:9000/opportunities',{params: {showingId: $scope.selectedFilm.url}})
            .then(function(response) {
              $scope.opportunities = response.data;
              $scope.selectedDate = $scope.opportunities[0];
              $scope.fetchTimes = function() {
                $http.get('http://localhost:9000/times', {params: {showingId: $scope.selectedFilm.url, date: $scope.selectedDate.date}})
                  .then(function(response) {
                    $scope.opportunityTimes = response.data;
                  })
              }
              $scope.fetchTimes();
            })
        };
        $scope.fetchSelectedFilmData();
      });
    $scope.fetchTicketTypes = function() {
        $http.get('http://localhost:9000/tickets')
          .then(function(response) {
            $scope.tickets = response.data;
            $scope.selectedTicketType = $scope.tickets[0];
          })
      };
      $scope.fetchTicketTypes(); 
      $scope.quantity = 0;
  }]);

myAppControllers.controller('FilmDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('http://localhost:9000/showings/film',{params: {showingId: $routeParams.showingId}})
      .then(function(response) {
        $scope.showing = response.data;
      })
  }]);

