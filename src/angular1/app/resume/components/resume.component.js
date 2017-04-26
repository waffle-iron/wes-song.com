export default {
	selector: 'resume',
	bindings: {},
	controller: class resumeCtrl {
		/* @ngInject */
		constructor () {
		
		}
		
		$onInit () {
			console.log('resumeCtrl $onInit');
		}
		$postLink () {}
	},
	template: `<div class="container-fluid">
    <div>Resume</div>
</div>`
};

