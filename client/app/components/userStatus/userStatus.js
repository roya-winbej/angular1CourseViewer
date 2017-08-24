import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userStatusComponent from './userStatus.component';

let userStatusModule = angular.module('userStatus', [
  uiRouter
])

.component('userStatus', userStatusComponent)

.name;

export default userStatusModule;
