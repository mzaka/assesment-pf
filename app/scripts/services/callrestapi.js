'use strict';

/**
 * @ngdoc service
 * @name propFinderApp.callRestApi
 * @description
 * # callRestApi
 * Service in the propFinderApp.
 */
angular.module('propFinderApp')
  .service('callRestApi', ['$resource', function ($resource)  {
  return {

    call_data: $resource('https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1', null),
    }

  }]);



