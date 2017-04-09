import angular from 'angular';

let indexModule = angular.module('index', []);

import indexConfig from './routes/index.route';
indexModule.config(indexConfig);

export default indexModule;