import CourseListModule from './courseList';
import CourseListController from './courseList.controller';
import CourseListComponent from './courseList.component';
import CourseListTemplate from './courseList.html';

describe('CourseList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CourseListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CourseListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CourseListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = CourseListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CourseListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CourseListController);
    });
  });
});
