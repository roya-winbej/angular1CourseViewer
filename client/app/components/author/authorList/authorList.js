import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authorListComponent from './authorList.component';

let authorListModule = angular.module('authorList', [
  uiRouter
])

.component('authorList', authorListComponent)

.name;

export default authorListModule;
