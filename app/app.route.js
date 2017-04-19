(function () {
    'use strict';
    function appRoute ($stateProvider, $transitions) {
        $stateProvider
            .state({
                abstract: true,
                name: 'index',
                url: '',
                component: 'appComponent'
            });
    }
    
    function appTransitions ($trace) {
	    $trace.enable('TRANSITION');
    }
    
    angular.module('app')
        .config(appRoute)
        .run(appTransitions);
    appRoute.$inject = ['$stateProvider'];
	appTransitions.$inject = ['$trace'];
})();