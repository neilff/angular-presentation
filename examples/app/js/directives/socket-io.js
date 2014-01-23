'use strict';

/**
 * Socket IO Directive
 */

var io = require('socket.io-client');

angular.module('lcboApp.directives').
    directive('appSocket', [function() {
        return {
            restrict: 'E', // E = Element, A = Attribute
            template: '<span class="badge">{{user_count}} Users Connected</span>',
            controller: ['socketFactory', '$scope', function(socketFactory, $scope) {
                var socket = io.connect();

                $scope.user_count = 0;

                socket.on('usercount', function (data) {
                    console.log(data);
                    $scope.$apply(function() {
                        $scope.user_count = data.data;
                    });
                });
            }],
            link: function($scope, element, attrs) {
                /* On load of the directive, perform the following */
                console.log($scope, element, attrs);
            }
        }
    }]);