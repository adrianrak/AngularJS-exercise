import LoginModule from './login';
import LoginController from './login.controller';

describe('Login', () => {
  let makeController;
  const configurationService = {
    setUserName: () => {}
  };

  beforeEach(window.module(LoginModule));
  beforeEach((() => {
    makeController = () => {
      return new LoginController(configurationService);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    let controller ;

    beforeEach(() => {
      controller = makeController();
    });

    it('userName is empty', () => {
        expect(controller.userName).to.be.equal('');
    });

    it('has a configurationService property', () => { 
      expect(controller).to.have.property('configurationService');
    });

    describe('saveName', () => {
      let setUserNameSpy;

      beforeEach(() => {
        setUserNameSpy = sinon.spy(configurationService, 'setUserName');
        controller.saveName();
      });

      afterEach(() => {
        setUserNameSpy.restore();
      });

      it('should call setUserName method', () => {
        expect(setUserNameSpy.called).to.be.ok;
      });

    });
  });
});
