(function () {
	'use strict';
	const appComponent = {
		controller: function () {
			let ctrl = this;
			
			ctrl.$onInit = function () {
				console.log('appComponent init');
			};
		}
	};
	
	angular.module('app')
		.component('appComponent', appComponent);
	appComponent.$inject = [];
})();