'use strict';

/**
 * @ngdoc function
 * @name liveApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the liveApp
 */
angular.module('liveApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
