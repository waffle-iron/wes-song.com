(function () {
	'use strict';
	
	function resumeRoute ($stateProvider) {
		$stateProvider
			.state({
				name: 'index.resume',
				url: '/resume',
				component: 'resume'
			});
	}
	
	angular.module('resume')
		.config(resumeRoute);
	resumeRoute.$inject = ['$stateProvider'];
})();