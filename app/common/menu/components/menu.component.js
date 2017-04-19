(function () {
	'use strict';
	
	const menu = {
		controller: function (menuService) {
			let ctrl = this;
			
			ctrl.$onInit = function () {
				console.log('menu init');
				menuService.getStates();
			};
			ctrl.$postLink = function () {};
			ctrl.$onChanges = function () {};
		},
		template: `<div id="menu-container">
    <div id="menu-top">
    </div>
    <div class="list-group">
        <a ui-sref=".resume"
           ui-sref-active="active"
           class="list-group-item">Resume</a>
        <a ui-sref=".about"
           ui-sref-active="active"
           class="list-group-item">About</a>
        <a ui-sref=""
           ui-sref-active="active"
           class="list-group-item">Contact</a>
        <a ui-sref=""
           ui-sref-active="active"
           class="list-group-item">Blog</a>
    </div>
</div>`
	};
	
	angular.module('common')
		.component('menu', menu);
	menu.$inject = ['menuService'];
})();