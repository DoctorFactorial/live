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
    $scope.articles = ['Article 1', 'Article 2', 'Article 3'];
  });
