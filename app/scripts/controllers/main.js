'use strict';

/**
 * @ngdoc function
 * @name propFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the propFinderApp
 */
angular.module('propFinderApp')
  .controller('MainCtrl',['$scope','callRestApi', function ($scope,callRestApi) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    callRestApi.call_data.get().$promise.then(function(data) {

        $scope.slides = data.data;

        console.log($scope.slides);


    },function(error) {
                console.log(error);
                        });
  }]);
