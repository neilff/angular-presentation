'use strict';

/**
 * Version Directive
 */

angular.module('lcboApp.directives').
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);