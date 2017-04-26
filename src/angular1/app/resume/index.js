import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import 'styles/resume.scss';

import route from './resume.route';
import resume from './components/resume.component';

export default angular.module('resume', [uiRouter, ngAnimate])
	.config(route)
	.component(resume.selector, resume)
	.name;