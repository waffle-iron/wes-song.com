/*@ngInject*/
function resumeRoute ($stateProvider) {
	$stateProvider
		.state({
			name: 'app.resume',
			url: 'resume',
			component: 'resume'
		});
}

angular.module('app.resume')
	.config(resumeRoute);
