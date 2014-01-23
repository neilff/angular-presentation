'use strict';

/**
 * Key Down Directive
 */

angular.module('lcboApp.directives').
    directive('ngKeydown', [function() {
        return function (scope, element, attrs) {
            element.bind('keypress', function (event) {
                if (event.which !== 8 && event.which !== 13) {
                    scope.$eval(attrs.ngKeydown);
                }
            });
        };
    }]);