(function () {
	'use strict';
	
	function resumeService ($http, $q) {
		const service = {
			getResume: getResume
		};
		return service;
		
		function getResume(){
			return $http.get('api/');
		}
	}
	
	angular.module('resume')
		.factory('resumeService', resumeService);
	resumeService.$inject = ['$http', '$q'];
})();