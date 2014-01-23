'use strict';

/**
 * Declare app level module which depends on filters, and services
 */

angular.module('lcboApp', [
    'ngRoute',
    'ngAnimate',
    'btford.socket-io',
    'firebase',
    'ui.bootstrap',
    'ui.utils',
    'angles',
    'lcboApp.filters',
    'lcboApp.services',
    'lcboApp.directives',
    'lcboApp.controllers'
]);

angular.module('lcboApp.filters', []);
angular.module('lcboApp.services', []);
angular.module('lcboApp.directives', []);
angular.module('lcboApp.controllers', []);
