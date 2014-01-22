'use strict';

/**
 * Convert to % Filter
 */

angular.module('lcboApp.filters').
    filter('convertToPercent', [function() {
        return function(text) {
            return (text / 100).toFixed(1);
        }
    }]);
