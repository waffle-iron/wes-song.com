(function() {
    'use strict';
    function appConfig($locationProvider) {
        $locationProvider.html5Mode(true);
    }
    
    angular.module('app')
        .config(appConfig);
    appConfig.$inject = ['$locationProvider'];
})();