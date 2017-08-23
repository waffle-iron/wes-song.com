const menuComponent = {
	bindings: {

	},
	controller: /* @ngInject */ function (apiService) {
		let ctrl = this;

		ctrl.$onInit = function () {
			apiService.getStates()
				.then(function (res) {
					ctrl.menu = res;
					console.log('ctrl.menu', ctrl.menu);
				})
				.catch(function (err) {
					console.log('apiService err', err);
				});
		};
	},
	template: `<div class="title">wes-song.com</div>
<div class="menu-box">
    <div class="menu-button" ng-repeat="link in $ctrl.menu" ui-sref-active="link.state">
        <a ui-sref="link.state">{{link.title}}</a>
    </div>
</div>`
};

angular.module('app.widget')
	.component('menuComponent', menuComponent);
