'use strict';

/**
 * Client Side Routing
 */

angular.module('lcboApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'HomeCtrl'});

    /* Introduction Tab */
    $routeProvider.when('/introduction/databind', {templateUrl: 'views/introduction/databind.html', controller: 'DataBindCtrl'});
    $routeProvider.when('/introduction/directive-basic', {templateUrl: 'views/introduction/directive-basic.html', controller: 'DirectiveCtrl'});
    $routeProvider.when('/introduction/directive-int', {templateUrl: 'views/introduction/directive-int.html', controller: 'DirectiveCtrl'});
    $routeProvider.when('/introduction/directive-adv', {templateUrl: 'views/introduction/directive-adv.html', controller: 'DirectiveCtrl'});

    /* Services Tab */
    $routeProvider.when('/services/api', {templateUrl: 'views/services/api.html', controller: 'ApiCtrl'});

    $routeProvider.otherwise({redirectTo: '/home'});
}]);