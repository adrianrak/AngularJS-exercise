class ConfigurationService {
    constructor() {
        this.userName = '';
    }

    get getUserName(){
        return this.userName;
    }

    set setUserName(loginName){
        this.userName = loginName;
    }
}

const configurationService = new ConfigurationService;
export default configurationService;