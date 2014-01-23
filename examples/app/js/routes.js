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

    /* Services Tab */
    $routeProvider.when('/services/api', {templateUrl: 'views/services/api.html', controller: 'ApiCtrl'});
    $routeProvider.when('/services/filters', {templateUrl: 'views/services/filters.html', controller: 'FiltersCtrl'});

    /* Help Tab */
    $routeProvider.when('/help/links', {templateUrl: 'views/help/links.html', controller: 'HelpCtrl'});

    $routeProvider.otherwise({redirectTo: '/home'});
}]);