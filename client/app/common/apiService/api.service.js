/* @ngInject */
function apiService($q, $state, utilService) {
	let stateCache = [];
	const service = {
		getStates: getStates
	};
	return service;

	function getStates() {
		let defer = $q.defer();
		if (!stateCache.length) {
			$state.get().forEach(function (obj) {
				const tempArray = obj.name.split('.');
				if (tempArray.length === 2) {
					const link = {
						state: obj.name,
						title: utilService.capitalize(tempArray[1]),
						url: obj.url
					};
					stateCache.push(link);
				}
			});
		}
		defer.resolve(stateCache);
		return defer.promise;
	}
}

angular.module('app.common')
	.factory('apiService', apiService);
