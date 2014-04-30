'use strict';

/* Services */

var myAppServices = angular.module('myAppServices', ['ngResource']);

myAppServices.factory('Showing', ['$resource',
  function($resource){
    return $resource('showings/:showingId.json', {}, {
      query: {method:'GET', params:{showingId:'showings'}, isArray:true}
    });
  }]);