const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div class="container-menu">
<div>Header</div>
</div>`
};

angular.module('app.layout')
	.component('headerComponent', headerComponent);
