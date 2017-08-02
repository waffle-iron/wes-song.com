const home = {
	bindings: {

	},
	controller: function () {
		let ctrl = this;
		ctrl.title = '5340 Coffee and Events';

		ctrl.$onInit = function () {
			console.log('init Home');
		};
		ctrl.$postLink = function () {};
	},
	template: `<h1>Home</h1>`
};

angular.module('app.home')
	.component('home', home);
