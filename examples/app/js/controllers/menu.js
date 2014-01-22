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
                        },
                        {
                            url: '#/introduction/directive-adv',
                            title: 'Directives: Advanced'
                        }
                    ]
                },
                {
                    title: 'Services',
                    links: [
                        {
                            url: '#/services/api',
                            title: '$http'
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