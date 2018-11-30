
class HomeController {
  constructor(configurationService) {
    "ngInject";
    this.userName = '';
    this.configurationService = configurationService;
  }
  $onInit() {
    this.getUserName();
  }
  getUserName(){
    //this.configurationService.getUserName === '' ? this.userName = 'Guest' : this.userName = this.configurationService.getUserName;
    this.userName = this.configurationService.getUserName();
  }

  
}
export default HomeController;
