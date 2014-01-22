angular.module('lcboApp.services')
    .service('ApiService', ['$http', function($http) {

        /**
         * Make a request to LCBO API
         *
         * @param config {object} - Object which contains all the configuration settings for $http
         * @return {object} - $http object which success and error methods
         */

        var makeApiRequest = function(config) {

            var headers = {
                'Content-Type': 'application/json; charset=utf-8'
            };

            // Default request to GET
            if (config.method == undefined) {
                config.method = 'GET';
            }

            // Default isArray to true
            if (config.isArray == undefined) {
                config.isArray = true;
            }

            // Default cache to false
            if (config.cache == undefined) {
                config.cache = false;
            }

            if (config.params == undefined) {
                config.params = {};
            }

            return $http({
                url: '/api/' + config.url,
                headers: headers,
                method: config.method,
                params: config.params,
                data: angular.toJson(config.data),
                isArray: config.isArray,
                cache: config.cache
            });
        }

        return {
            makeApiRequest: makeApiRequest
        }
    }]);