'use strict';

/**
 * Menu Controller
 */

var _ = require('underscore');

angular.module('lcboApp.controllers').
    controller('MenuCtrl', ['$scope', function($scope) {

        _.extend($scope, {
            hello: 'world',
            projectName: 'Angular Examples',
            menuTemplate: 'views/templates/menu.html',
            menuLinks: [
                {
                    title: 'Introduction',
                    links: [
                        {
                            url: '#/introduction/databind',
                            title: 'Data Binding'
                        },
                        {
                            url: '#/introduction/directive-basic',
                            title: 'Directives: Basic'
                        },
                        {
                            url: '#/introduction/directive-int',
                            title: 'Directives: Intermediate'
                        }
                    ]
                },
                {
                    title: 'Services',
                    links: [
                        {
                            url: '#/services/api',
                            title: '$http'
                        },
                        {
                            url: '#/services/filters',
                            title: 'Filtering Data'
                        },
                        {
                            url: '#/services/firebase',
                            title: 'Firebase'
                        }
                    ]
                },
                {
                    title: 'Help',
                    links: [
                        {
                            url: '#/help/links',
                            title: 'Links'
                        },
                        {
                            url: 'http://docs.angularjs.org/guide/',
                            title: 'Documentation'
                        },
                        {
                            url: 'http://www.thinkster.io/',
                            title: 'Thinkster.io'
                        },
                        {
                            url: 'https://egghead.io/',
                            title: 'Egghead.io'
                        }
                    ]
                }
            ]
        });

        $scope.collapse = function() {
            $scope.isCollapsed = !$scope.isCollapsed;
        }

        $scope.init = function() {
            $scope.isCollapsed = true;
        }
    }]);