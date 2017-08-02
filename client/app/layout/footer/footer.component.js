const footerComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;
	},

	template:`<div class="container-footer">
		          <h1>Footer</h1>
	          </div>`
};

angular.module('app.layout')
	.component('footerComponent', footerComponent);
