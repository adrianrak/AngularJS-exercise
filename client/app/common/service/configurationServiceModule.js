import angular from 'angular';
import configurationService from './ConfigurationService';

const  configurationServiceModule = angular.module('configurationService', [])
  .service('configurationService', configurationService)
  .name;

export default configurationServiceModule;