const resume = {
	bindings: {},
	controller: function () {
		let ctrl = this;
	},
	template: `<div>Resume</div>`
};

angular.module('app.resume')
	.component('resume', resume);