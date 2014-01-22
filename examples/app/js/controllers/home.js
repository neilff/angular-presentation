'use strict';

/**
 * Home Controller
 */

angular.module('lcboApp.controllers').
    controller('HomeCtrl', ['$scope', function($scope) {

        $scope.config = {
            title: 'Express / Angular Seed'
        }

        $scope.init = function() {
        }
    }]);