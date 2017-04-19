(function () {
	'use strict';
	
	function aboutRoute($stateProvider) {
		$stateProvider
			.state({
				name: 'index.about',
				url: '/about',
				component: 'about'
			});
	}
	
	angular.module('about')
		.config(aboutRoute);
	aboutRoute.$inject = ['$stateProvider'];
})();