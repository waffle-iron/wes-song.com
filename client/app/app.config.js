/*@ngInject*/
function siteConfig($locationProvider, $urlRouterProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
}

angular.module('app')
	.config(siteConfig);