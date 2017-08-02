const bodyComponent = {
	bindings: {

	},
	controller: function () {

	},
	template: `<div>Body</div>
<ui-view></ui-view>`
};

angular.module('app.layout')
	.component('bodyComponent', bodyComponent);
