(function () {
	'use strict';
	
	function appResize ($window) {
		const directive = {
			scope: {
				offsetW: '@',
				offsetH: '@'
			},
			link: link,
			restrict: 'A'
		};
		return directive;
		
		function link (scope, element, attrs) {
			console.log('check bindings', scope.offsetW, scope.offsetH, element);
			
			changeCss($window.innerWidth, scope.offsetW, $window.innerHeight, scope.offsetH);
			
			angular.element($window).bind('resize', function(){
				changeCss($window.innerWidth, scope.offsetW, $window.innerHeight, scope.offsetH);
				
				scope.$digest();
			});
			
			function changeCss(width, offsetw, height, offseth){
				if(offsetw){
					element.css({width: width - offsetw + 'px'});
				} else {
					element.css({width: width + 'px'});
				}
				
				if(offseth){
					element.css({height: height - offseth + 'px'});
				} else {
					element.css({height: height + 'px'});
				}
			}
		}
	}
	
	angular.module('common')
		.directive('appResize', appResize);
	appResize.$inject = ['$window'];
})();