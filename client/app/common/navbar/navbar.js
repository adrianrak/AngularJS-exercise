import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';
import configurationService from './../service/configurationServiceModule';

let navbarModule = angular.module('navbar', [
  uiRouter,
  configurationService
])

.component('navbar', navbarComponent)
  
.name;

export default navbarModule;
