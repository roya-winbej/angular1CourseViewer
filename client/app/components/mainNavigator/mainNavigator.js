import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainNavigatorComponent from './mainNavigator.component';

let mainNavigatorModule = angular.module('mainNavigator', [
  uiRouter
])

.component('mainNavigator', mainNavigatorComponent)

.name;

export default mainNavigatorModule;
