(function() {
    'use strict';
    function appConfig($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
	    $urlRouterProvider.when('', '/resume');
    }
    
    angular.module('app')
        .config(appConfig);
    appConfig.$inject = ['$locationProvider', '$urlRouterProvider'];
})();