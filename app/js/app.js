'use strict';
// Declare app level module which depends on filters, and services
angular.module('myApp', [
'ngRoute',
'myAppServices',
'myAppControllers'
]).
config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/films', {templateUrl: 'partials/film-list.html', controller: 'FilmListCtrl'});
$routeProvider.when('/films/:showingId', {templateUrl: 'partials/film-detail.html', controller: 'FilmDetailCtrl'});
$routeProvider.otherwise({redirectTo: '/films'});
}]);