'use strict';

/**
 * Application Dependencies
 */

/* Configurations */
require('./config');
require('./routes');

/* Controllers */
require('./controllers/menu');
require('./controllers/home');

require('./controllers/introduction/databind');
require('./controllers/introduction/directive');

require('./controllers/services/api');
require('./controllers/services/filters');

require('./controllers/help/links');

/* Directives */
require('./directives/version');
require('./directives/basic-directive');
require('./directives/enter');
require('./directives/header-sort');
require('./directives/link-examples');
require('./directives/weather-widget');
require('./directives/socket-io');

/* Filters */
require('./filters/interpolate');
require('./filters/converttopercent');
require('./filters/converttodollar');
require('./filters/replacespaces');
require('./filters/moment');

/* Services */
require('./services/api');
require('./services/version');
require('./services/links');

