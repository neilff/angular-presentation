'use strict';

/**
 * Header Sort Directive
 */

angular.module('lcboApp.directives').
    directive('appHeaderSort', [function() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<a href="" ng-transclude></a>',
            link: function($scope, element, attrs) {
                element.on('click', function(e) {
                    /* Inform AngularJS to refresh scope */
                    $scope.$apply(function() {
                        $scope.reverse = !$scope.reverse;
                        $scope.order = attrs.order;
                    });
                });
            }
        }
    }]);