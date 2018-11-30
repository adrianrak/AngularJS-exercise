class ConfigurationService {
    constructor() {
        this.userName = 'Guest';
    }

    getUserName(){
        return this.userName;
    }

    setUserName(loginName){
        this.userName = loginName;
    }
}

export default ConfigurationService;