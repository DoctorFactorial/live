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

    $scope.products = [
    {
    	title: 'Un Chien Andalou',
    	content: 'Here is where we tell you what\'s going on',
    	venue: 'La Boca',
    	tag: 'Concierto',
    	date: 'sáb 28 jun, 22:00',
    	price: '15€',
    	images: {
    		full: '/../../images/la-boca.jpg',
    		thumb : '/../../images/yeoman.png'
    	}
    },
    {
    	title: 'Un Chien Andalou 2',
    	content: 'Here is where we tell you what\'s going on',
    	venue: 'La Boca',
    	tag: 'Concierto',
    	image: '/../../images/yeoman.png',
    	date: 'sáb 28 jun, 22:00',
    	price: '15€',
    	images: {
    		full: '/../../images/la-boca.jpg',
    		thumb : '/../../images/yeoman.png'
    	}
    }
    ];
  });
