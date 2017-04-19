(function () {
	'use strict';
	
	function menuService($state){
		const service = {
			getStates: getStates
		};
		return service;
		
		function getStates() {
			console.log('getStates $state', $state.get());
		}
	}
	
	angular.module('common')
		.factory('menuService', menuService);
	menuService.$inject = ['$state'];
})();