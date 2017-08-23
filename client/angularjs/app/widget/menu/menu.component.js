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
		}
	},
	template: `<div>menu</div>
<div class="menu-box">
    <div class="menu-button" ng-repeat="link in $ctrl.menu" ui-sref-active="link.state">
        {{link.title}}
    </div>
</div>`
};

angular.module('app.widget')
	.component('menuComponent', menuComponent);
