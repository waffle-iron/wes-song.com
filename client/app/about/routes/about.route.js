/*@ngInject*/
function aboutRoute ($stateProvider) {
	$stateProvider
		.state({
			name: 'app.about',
			url: 'about',
			component: 'about'
		});
}

angular.module('app.about')
	.config(aboutRoute);
