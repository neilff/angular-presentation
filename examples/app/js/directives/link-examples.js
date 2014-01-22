'use strict';

/**
 * Link Examples Directive
 */

angular.module('lcboApp.directives').
    directive('appLinkExamples', [function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'views/templates/link-examples.html',
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