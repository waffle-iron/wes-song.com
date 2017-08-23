function utilService() {
	const service = {
		capitalize: capitalize
	};
	return service;

	function capitalize(input) {
		const array = input.split('');
		array[0] = array[0].toUpperCase();
		return array.join('');
	}
}

angular.module('app.common')
	.factory('utilService', utilService);
