import AuthorListModule from './authorList';
import AuthorListController from './authorList.controller';
import AuthorListComponent from './authorList.component';
import AuthorListTemplate from './authorList.html';

describe('AuthorList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AuthorListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AuthorListController();
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
      expect(AuthorListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AuthorListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AuthorListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AuthorListController);
    });
  });
});
