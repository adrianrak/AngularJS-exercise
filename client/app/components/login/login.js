import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';
import configurationService from './../../common/service/configurationServiceModule';

let loginModule = angular.module('login', [
  uiRouter,
  configurationService
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('login', {
        url: '/login',
        component: 'login'
    });
})
.component('login', loginComponent)

.name;

export default loginModule;
