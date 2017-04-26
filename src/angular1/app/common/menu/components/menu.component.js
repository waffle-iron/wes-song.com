export default {
	controller: class menuCtrl {
		/* @ngInject */
		constructor  (menuService) {
		
		}
		
		$onInit () {
			console.log('menu init');
			menuService.getStates();
		};
		$postLink () {
		};
		$onChanges () {
		};
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