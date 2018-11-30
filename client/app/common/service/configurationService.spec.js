import configurationService from './ConfigurationService';

describe('ConfigurationService', () => {
    let service;

    beforeEach(() => {
        service = new configurationService;
    });

    describe('getUserName', () => {
        const name = 'Guest';

        it('user name to equal Guest', () => {
            expect(service.getUserName()).to.be.equal(name);
        });
    });

    describe('setUserName', () => {
        const name = 'Zbigniew';

        beforeEach(() => {
            service.setUserName(name);
        });

        it('user name to equal Zbigniew', () => {
            expect(service.getUserName()).to.be.equal(name);
        });
    });
});