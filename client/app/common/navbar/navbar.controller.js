class NavbarController {
  constructor(configurationService) {
    "ngInject";
    this.name = 'home';
    this.login = '';
    this.configurationService = configurationService;
  }

  $onInit() {
    this.loginSet();
  }

  loginSet() {
    this.configurationService.getUserName() === 'Guest' ? this.login = 'login' : this.login = 'logout';
  }

  logout() {
    this.configurationService.setUserName('Guest');
  }
  
}

export default NavbarController;
