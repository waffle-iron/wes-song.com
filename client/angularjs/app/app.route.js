/*@ngInject*/
function baseRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app',
			url: '/',
			template: `<layout-component></layout-component>`,
			abstract: true,
			resolve: {

			}
		});
}

angular.module('app')
	.config(baseRoute);