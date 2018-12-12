import HomeModule from './home';
import HomeController from './home.controller';

describe('Home', () => {
  let $rootScope, $state, $location, $componentController, $compile;
  let makeController;
  const configurationService = {
    getUserName: () => {}
  };

  beforeEach(window.module(HomeModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  beforeEach((() => {
    makeController = () => {
      return new HomeController(configurationService);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be home', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('home');
    });
  });

  describe('Controller', () => {
    let controller;
    
    beforeEach(() => {
      controller = makeController();
    });

    describe('getName', () => {
      let getUserNameSpy;

      beforeEach(() => {
        getUserNameSpy = sinon.spy(configurationService, 'getUserName');
        controller.getUserName();
      });

      afterEach(() => {
        getUserNameSpy.restore();
      });

      it('should call getUserName method', () => {
        expect(getUserNameSpy.called).to.be.ok;
      });
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<home></home>')(scope);
      scope.$apply();
    });

  });
});
