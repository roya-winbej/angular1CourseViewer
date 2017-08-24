import UserStatusModule from './userStatus';
import UserStatusController from './userStatus.controller';
import UserStatusComponent from './userStatus.component';
import UserStatusTemplate from './userStatus.html';

describe('UserStatus', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserStatusModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserStatusController();
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
      expect(UserStatusTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = UserStatusComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(UserStatusTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(UserStatusController);
    });
  });
});
