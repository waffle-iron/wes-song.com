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
	template: `<div class="body-container">
    <h1>Home</h1>
</div>`
};

angular.module('app.home')
	.component('home', home);
