'use strict';

/* Filters */

var myAppFilters = angular.module('myAppFilters', []);

myAppFilters.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], keys = [];
      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      return output;
   };
});

myAppFilters.filter('byDate', function() {
   	return function(collection, dateValue) {
   		var output = [];
   		angular.forEach(collection, function(item) {
   			if (item.date = dateValue) {
   				output.push(item);
   			}
   		});
   		return output;
   	};
});
