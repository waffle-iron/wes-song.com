(function () {
    'use strict';
    function appRoute ($stateProvider) {
        $stateProvider
            .state({
                name: 'index',
                url: '',
                component: 'appComponent'
            });
    }
    
    angular.module('app')
        .config(appRoute);
    appRoute.$inject = ['$stateProvider'];
})();