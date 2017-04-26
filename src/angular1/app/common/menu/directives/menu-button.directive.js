export default function menuButton() {
	const directive = {
		scope: {},
		link: link,
		restrict: 'A'
	};
	return directive;
	
	function link(scope, element, attrs) {
		element.bind('click', function (event) {
			if (element.hasClass('active')) {
				element.removeClass('active');
			}
			else {
				element.addClass('active');
			}
			
		});
	}
}
