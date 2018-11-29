import configurationService from './../service/ConfigurationService';

class NavbarController {
  constructor() {
    this.name = 'home';
    this.login = '';
    this.configurationService = configurationService;
  }
  $onInit(){
    this.loginSet();
  }
  loginSet(){
    this.configurationService.userName === '' ? this.login = 'login' : this.login = 'logout';
  }
  logout(){
    this.configurationService.setUserName = '';
  }
}

export default NavbarController;
