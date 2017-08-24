import angular from 'angular';
import uiRouter from 'angular-ui-router';
import courseViewerComponent from './course-viewer.component';

let courseViewerModule = angular.module('courseViewer', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        component: 'index'
      });
  })

  .component('index', courseViewerComponent)

  .name;

export default courseViewerModule;
