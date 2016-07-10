'use strict';
require.config({
	paths: {
		routes: './routes',
		text: '../lib/text',
		angular: '../lib/angular',
		angularrouter: '../lib/angular-route'
	}
});
require(['angular'], function() {
	require(['angularrouter'], function() {
    angular.module('lightbox', ['ngRoute']);
		require(['router'], function() {
			angular.bootstrap(document, ['lightbox']);
		});
	});
});
