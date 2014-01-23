'use strict';

/**
 * Help Controller
 */

angular.module('lcboApp.controllers').
    controller('HelpCtrl', ['$scope', 'LinkService', function($scope, LinkService) {

        $scope.config = {
            title: 'Links'
        }

        $scope.init = function() {
            $scope.links = LinkService.links;
        }
    }]);