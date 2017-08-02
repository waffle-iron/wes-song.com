const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div class="container-menu">
<menu-component></menu-component>
</div>`
};

angular.module('app.layout')
	.component('headerComponent', headerComponent);
