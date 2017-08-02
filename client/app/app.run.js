/* @ngInject */
function appTransitions($rootScope, $trace) {
	$trace.enable('TRANSITION');

	$rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams) {
		console.log('$stateChangeStart ' + fromState.name + JSON.stringify(fromParams) +
			' -> ' + toState.name + JSON.stringify(toParams));
	});
	$rootScope.$on('$stateChangeSuccess', function (evt, toState, toParams, fromState, fromParams) {
		console.log('$stateChangeSuccess ' + fromState.name + JSON.stringify(fromParams) +
			' -> ' + toState.name + JSON.stringify(toParams));
	});
	$rootScope.$on('$stateChangeError', function (evt, toState, toParams, fromState, fromParams) {
		console.log('$stateChangeError ' + fromState.name + JSON.stringify(fromParams) +
			' -> ' + toState.name + JSON.stringify(toParams));
	});
}

angular.module('app')
	.run(appTransitions);