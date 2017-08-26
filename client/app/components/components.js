import angular from 'angular';
import userStatusModule from './userStatus/userStatus';
import mainNavigatorModule from './mainNavigator/mainNavigator';
import homeModule from './home/home';
import courseListModule from './course/courseList/courseList';
import authorListModule from './author/authorList/authorList';


let componentModule = angular.module('app.components', [
  userStatusModule,
  mainNavigatorModule,
  homeModule,
  courseListModule,
  authorListModule,
]).name;

export default componentModule;
