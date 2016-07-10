define(['homeController'], function() {
	'use strict';
  angular.module('lightbox').config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/', {
				templateUrl: 'templates/home.html',
				controller: 'HomeController'
			}).
			otherwise({
				redirectTo: '/'
			});
		}
	]);
});
