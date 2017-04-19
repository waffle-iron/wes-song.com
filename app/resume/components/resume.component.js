(function () {
	'use strict';
	
	const resume = {
		controller: function() {
			let ctrl = this;
			
			ctrl.$onInit = function () {};
			ctrl.$postLink = function () {};
		},
		template: `<div class="container-fluid">
    <div>Resume</div>
</div>`
	};
	
	angular.module('resume')
		.component('resume', resume);
	resume.$inject = [];
})();