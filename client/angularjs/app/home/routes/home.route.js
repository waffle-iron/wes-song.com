/*@ngInject*/
function homeRoute ($stateProvider) {
	$stateProvider
		.state({
			name: 'app.home',
			url: '',
			component: 'home'
		});
}

angular.module('app.home')
	.config(homeRoute);
