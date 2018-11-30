import configurationService from './ConfigurationService';

describe('ConfigurationService', () => {
    let service = configurationService;

    describe('getUserName', () => {
        const name = 'Zbigniew';
        beforeEach(() => {
            service.setUserName = name;
        })
        it('user name to equal empty', () => {
            expect(service.getUserName).to.be.eq(service.userName);
        });
        it('setUserName', () => {
            expect(service.SetUserName).to.be.eq(name);
        });
    });
});