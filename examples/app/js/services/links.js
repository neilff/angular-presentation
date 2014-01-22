'use strict';

/**
 * Links Factory
 */

angular.module('lcboApp.services')
    .factory('LinkService', [function() {
        return {
            directives: [
                {
                    url: 'http://www.ng-newsletter.com/posts/directives.html',
                    title: 'Build custom directives with AngularJS'
                },
                {
                    url: 'http://docs.angularjs.org/guide/directive',
                    title: 'Official Directives Guide'
                },
                {
                    url: 'http://docs.angularjs.org/api/angular.element',
                    title: 'AngularJS jQuery Lite Support'
                }
            ]
        }
    }]);
