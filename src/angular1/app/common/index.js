import angular from 'angular';
import ngAnimate from 'angular-animate';

//Menu Components
import menu from 'menu/components/menu.component';
import menuService from 'services/menu.service';
import menuButton from 'menu/directives/menu-button.directive';

export default angular.module('common', [ngAnimate])
	.component(menu.selector, menu)
	.directive(menuButton.name, menuButton)
	.name;