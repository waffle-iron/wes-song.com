function indexRoute = ($stateProvider, $httpProvider) => {
'ngInject';

$stateProvider
    .state('index', {
        url: '/',
        component: 'index'
    })
};