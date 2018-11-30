
class LoginController {
  constructor(configurationService) {
    "ngInject";
    this.userName = '';
    this.configurationService = configurationService;
  }
  saveName(){
   this.configurationService.setUserName(this.userName);
  }
}

export default LoginController;
