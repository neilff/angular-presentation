'use strict';

/**
 * Data Bind Controller
 */

angular.module('lcboApp.controllers').
    controller('DataBindCtrl', ['$scope', function($scope) {

        $scope.config = {
            title: 'Two Way Databinding Example'
        }

        $scope.init = function() {
            $scope.name = 'Enter your name above!'
        }
    }]);