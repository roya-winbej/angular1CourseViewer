import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('authors', {
        url: '/authors',
        component: 'authorList'
      })
      .state('courses', {
        url: '/courses',
        component: 'course'
      })
      .state('home', {
        url: '/',
        component: 'home'
      });

    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
