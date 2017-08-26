import angular from 'angular';
import userStatusModule from './userStatus/userStatus';
import mainNavigatorModule from './mainNavigator/mainNavigator';
import homeModule from './home/home';
import authorListModule from './author/authorList/authorList';
import courseModule from './course/course';


let componentModule = angular.module('app.components', [
  userStatusModule,
  mainNavigatorModule,
  homeModule,
  courseModule,
  authorListModule,
]).name;

export default componentModule;
