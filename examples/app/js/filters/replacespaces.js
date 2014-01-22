'use strict';

/**
 * Convert to % Filter
 */

angular.module('lcboApp.filters').
    filter('replaceSpaces', [function() {
        return function(str) {
            return str.replace(/ /g, '+');
        }
    }]);
