export default function route ($stateProvider) {
	'ngInject';
	$stateProvider
		.state({
			name: 'resume',
			url: '/',
			component: 'resume'
		});
}
