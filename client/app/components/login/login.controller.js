import configurationService from './../../common/service/ConfigurationService';

class LoginController {
  constructor() {
    this.name = 'login';
    this.userName = '';
    this.configurationService = configurationService;
  }
  saveName(){
   this.configurationService.setUserName = this.userName;
  }
}

export default LoginController;
