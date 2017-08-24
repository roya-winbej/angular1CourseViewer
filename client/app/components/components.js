import angular from 'angular';
import courseViewerModule from './course-viewer/course-viewer';
import userStatusModule from './userStatus/userStatus';
import mainNavigatorModule from './mainNavigator/mainNavigator';


let componentModule = angular.module('app.components', [
  courseViewerModule,
  userStatusModule,
  mainNavigatorModule
]).name;

export default componentModule;
