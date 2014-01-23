'use strict';

/**
 * MomentJS: Unix to Readable Filter
 */

var moment = require('moment');

angular.module('lcboApp.filters').
    filter('moment', [function() {
        return function(date, format) {
            if (moment.unix(date).format(format) !== 'Invalid date') {
                return moment.unix(date).format(format);
            } else {
                return moment(date).format(format);
            }
        }
    }]);
