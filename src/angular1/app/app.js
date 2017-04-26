import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './app.config';
import trace from './app.run';
import resume from './resume/index';

angular.module('app', [uiRouter, resume])
	.config(config)
	.run(trace);