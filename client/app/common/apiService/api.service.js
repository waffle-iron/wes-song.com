/*@ngInject*/
function apiService($state) {
	const service = {
		getStates: getStates
	};
	return service;

	function getStates() {

	}
}

angular.module('app.common')
	.factory('apiService', apiService);