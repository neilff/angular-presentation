'use strict';

/**
 * Super Basic Directive
 */

angular.module('lcboApp.directives').
    directive('appBasicDirective', [function() { // Notice naming convention
        return {
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            scope: {
                name: '@', // @ = Local $scope, = = Parent $scope
                color: '@',
                changeMe: '@'
            },
            transclude: true,       /* Transclusion allows us to retain the tags located inside the directive tag */
            template: '<p>Hello {{name}}</p><a href="" ng-transclude></a>',     /* ng-transclude is the tag which the transcluded tags will appear in */
            link: function($scope, element, attrs) {

                /* On load of the directive, perform the following */
                console.log($scope, element, attrs);

                /* Example of jQuery Lite */
                element.addClass('lead')
                    .css('background-color', attrs.color)
                    .css('display', 'block')
                    .css('padding', '15px');

                /* Bind on-click event */
                element.on('click', function(e) {
                    element.addClass('alert');

                    /* We have to manually inform the $scope to update */
                    $scope.$apply(function() {
                        $scope.name = $scope.changeMe;
                    });
                });
            }
        }
    }]);