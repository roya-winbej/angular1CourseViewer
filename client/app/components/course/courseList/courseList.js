import angular from 'angular';
import uiRouter from 'angular-ui-router';
import courseListComponent from './courseList.component';

let courseListModule = angular.module('courseList', [
  uiRouter
])

.component('courseList', courseListComponent)

.name;

export default courseListModule;
