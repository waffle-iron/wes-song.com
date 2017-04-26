(function () {
	'use strict';
	
	const about = {
		controller: function () {
			let ctrl = this;
			
			ctrl.$onInit = function () {};
			ctrl.$postLink = function () {};
			ctrl.$onChanges = function () {};
		},
		template: `<div class="container-fluid">
    <div>About</div>
</div>`
	};
	
	angular.module('about')
		.component('about', about);
	about.$inject = [];
})();