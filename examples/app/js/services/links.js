'use strict';

/**
 * Links Factory
 */

angular.module('lcboApp.services')
    .factory('LinkService', [function() {
        return {
            links: [
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
                },
                {
                    url: 'http://www.html5rocks.com/en/tutorials/frameworks/angular-websockets/',
                    title: 'WebSockets and AngularJS'
                },
                {
                    url: 'http://blog.coderstats.net/todomvc-complexity/',
                    title: 'Comparing Todo MVC Implementations'
                },
                {
                    url: 'http://www.yearofmoo.com/2013/08/remastered-animation-in-angularjs-1-2.html',
                    title: 'Remastered Animations in AngularJS 1.2'
                },
                {
                    url: 'http://codingsmackdown.tv/blog/2013/01/02/using-response-interceptors-to-show-and-hide-a-loading-widget/',
                    title: 'Using HTTP Interceptors to Show or Hide a Loading Modal'
                }
            ]
        }
    }]);
