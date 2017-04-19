(function () {
	'use strict';
	const appComponent = {
		controller: function ($window) {
			let ctrl = this;
			
			ctrl.$onInit = function () {
				console.log('appComponent init');
			};
		},
		template: `<div id="app-container"
     app-resize
     offset-w=""
     offset-h="">
    <div id="menu-container">
        <menu></menu>
    </div>
    <div id="body-container" app-resize
         offset-w="200"
         offset-h="">
        <ui-view></ui-view>
    </div>

</div>`
	};
	
	angular.module('app')
		.component('appComponent', appComponent);
	appComponent.$inject = ['$window'];
})();