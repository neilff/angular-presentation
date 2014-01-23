'use strict';

/**
 * Socket IO Directive
 */

var io = require('socket.io-client'),
    _ = require('underscore');

angular.module('lcboApp.directives').
    directive('appSocket', [function() {
        return {
            restrict: 'E', // E = Element, A = Attribute
            template: '<span class="badge {{color}}">{{user_count}} Users Connected</span>',
            controller: ['socketFactory', '$scope', function(socketFactory, $scope) {
                var socket = io.connect();

                _.extend($scope, {
                    user_count: 0,
                    color: ''
                });

                /* When Socket.io emits 'usercount', perform action */
                socket.on('usercount', function (data) {
                    console.log(data.data);
                    $scope.$apply(function() {
                        if (data.data > 1) {
                            $scope.color = 'bg-blue';
                        } else {
                            $scope.color = '';
                        }

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