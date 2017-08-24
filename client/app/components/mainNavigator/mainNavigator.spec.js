import MainNavigatorModule from './mainNavigator';
import MainNavigatorController from './mainNavigator.controller';
import MainNavigatorComponent from './mainNavigator.component';
import MainNavigatorTemplate from './mainNavigator.html';

describe('MainNavigator', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MainNavigatorModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MainNavigatorController();
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
      expect(MainNavigatorTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MainNavigatorComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MainNavigatorTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MainNavigatorController);
    });
  });
});
