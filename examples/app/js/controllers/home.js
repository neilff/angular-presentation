'use strict';

/**
 * Home Controller
 */

angular.module('lcboApp.controllers').
    controller('HomeCtrl', ['$scope', '$log', function($scope, $log) {

        $scope.config = {
            title: 'Express / Angular Seed',
            subtitle: 'This is a subtitle'
        }

        $scope.fruits = ['Apple', 'Banana', 'Corn', 'Toast'];

        $scope.show = false;

        $scope.count = 0;

        $scope.toggle = function(toggleThis) {
            $scope.show = !$scope.show;
            $scope.count++;
        }

        $scope.init = function() {
            $log.debug('ng-init $scope: ', $scope);
            $log.log('Log');
            $log.info('Info');
            $log.warn('Warning');
            $log.error('Error');
        }
    }]);