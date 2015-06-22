'use strict';

/**
 * @ngdoc function
 * @name liveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the liveApp
 */
angular.module('liveApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    var articlesInStore = localStorageService.get('articles');
	
	$scope.articles = articlesInStore || [];
	
	$scope.$watch('articles', function () {
		localStorageService.set('articles', $scope.articles);
	}, true);

    $scope.addArticle = function () {
    	$scope.articles.push($scope.article);
    	$scope.article = '';
    };
    
    $scope.removeArticle = function (index) {
    	$scope.articles.splice(index, 1);
    };
  });
