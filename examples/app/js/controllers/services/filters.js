'use strict';

/**
 * Data Filters Controller
 */

var _ = require('underscore');

angular.module('lcboApp.controllers').
    controller('FiltersCtrl', ['$scope', '$http',  function($scope, $http) {

        $scope.init = function () {
            _.extend($scope, {
                config: {
                    title: 'Example API Service Call'
                },
                dataset: []
            });

            $http.get('/json').success(function (results) {
                console.log(results.data);
                $scope.dataset = results.data;
            });
        };
    }]);