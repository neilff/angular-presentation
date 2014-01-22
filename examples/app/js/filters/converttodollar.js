'use strict';

/**
 * Convert to Dollar Filter
 */

angular.module('lcboApp.filters').
    filter('convertToDollar', [function() {
        return function(text) {
            return '$' + (text / 100).toFixed(2);
        }
    }]);
