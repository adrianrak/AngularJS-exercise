import configurationService from './../../common/service/ConfigurationService';

class HomeController {
  constructor() {
    this.userName = '';
    this.configurationService = configurationService;
  }
  $onInit() {
    this.getUserName();
  }
  getUserName(){
    this.configurationService.getUserName === '' ? this.userName = 'Guest' : this.userName = this.configurationService.getUserName;
  }

  
}
export default HomeController;
