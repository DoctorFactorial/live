'use strict';

/**
 * @ngdoc function
 * @name liveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the liveApp
 */
angular.module('liveApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
