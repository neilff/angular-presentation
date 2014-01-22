'use strict';

/**
 * MomentJS: Unix to Readable Filter
 */

var moment = require('moment');

angular.module('lcboApp.filters').
    filter('moment', [function() {
        return function(date, format) {
            return moment.unix(date).format(format);
        }
    }]);
