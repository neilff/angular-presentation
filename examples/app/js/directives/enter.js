'use strict';

/**
 * Enter Key Directive
 */

angular.module('lcboApp.directives').
    directive('ngEnter', [function() {
        return function (scope, element, attrs) {
            element.bind('keypress', function (event) {
                if (event.which === 13) {
                    scope.$eval(attrs.ngEnter);
                    event.preventDefault();
                }
            });
        };
    }]);