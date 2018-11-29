import ConfigurationService from './../../common/service/ConfigurationService';

class HomeController {
  constructor() {
    this.name = 'home';
    this.userName = '';
    this.configurationService = ConfigurationService;
  }
  $onInit() {
    this.getUserName();
  }
  getUserName(){
    this.configurationService.getUserName === '' ? this.userName = 'Guest' : this.userName = this.configurationService.getUserName;
  }

  
}
export default HomeController;
