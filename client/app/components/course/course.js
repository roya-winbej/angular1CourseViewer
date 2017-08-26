import angular from 'angular';
import uiRouter from 'angular-ui-router';
import courseComponent from './course.component';
import courseHeadingComponent from './courseHeading.component';

let courseModule = angular.module('course', [
  uiRouter
])

.component('course', courseComponent)
.component('courseHeading', courseHeadingComponent)

.name;

export default courseModule;
