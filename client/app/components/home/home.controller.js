class HomeController {
  constructor(configurationService) {
    "ngInject";
    this.userName = '';
    this.configurationService = configurationService;
  }

  $onInit() {
    this.getUserName();
  }

  getUserName() {
    this.userName = this.configurationService.getUserName();
  }

}
export default HomeController;
